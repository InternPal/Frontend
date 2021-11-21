import React, { useState, useEffect } from "react";
import axios from "../../axios";
import {connect} from "react-redux";

import { Row, Button, Card, Col, CardBody, CardHeader } from "reactstrap";
import { FiFilter } from "react-icons/fi";
import {BiTrophy} from "react-icons/bi";

import JobFilterBar from "../../components/JobFilterBar/JobFilterBar";
import CardHostComponent from "../../components/CardHostComponent/CardHostComponent";


const JobSearch = (props) => {
    const [showFilterBar, toggleFilterBar] = useState(false);
    const [jobs, setJobs] = useState(null);
    const [actualJobs, setActualJobs] = useState(null);

    useEffect(()=>{
        axios.get("/students/filter/" + props.sid)
        .then((res)=>{
            setJobs(res.data);
            setActualJobs(res.data);
        })
        .catch((err)=>{
            alert(err);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const filterJobs = (tiers, profiles, locations)=>{
        setJobs((_)=>{
            var jobs = actualJobs;
            if(tiers.length > 0){
                jobs = jobs.filter((j)=>{return tiers.includes(j.tier)})
            }
            if(profiles.length > 0){
                jobs = jobs.filter((j)=>{return profiles.includes(j.profile)})
            }
            if(locations.length > 0){
                jobs = jobs.filter((j)=>{return locations.includes(j.location)})
            }
            return jobs;
        })
    }

    return <div className="content">
        {props.offer ? <Card>
                        <CardBody>
                            <center><BiTrophy size="60px" color="grey" /></center>
                            <br />
                            <center><h5>You have already accepted an Offer</h5></center>
                        </CardBody>
                    </Card> :
        <Row>
            <Col lg={showFilterBar ? 8 : 12}>
                <Button className="btn-round" color="primary" onClick={()=>{
                    toggleFilterBar(prev=>!prev)
                }}><FiFilter size="20px" /> Filter Jobs</Button>
                    <Card>
                    <CardHeader>
                        <h5>Jobs</h5>
                    </CardHeader>
                    <CardBody>
                    { jobs !== null && <>
                    {
                        <Row>
                      { jobs.length === 0 ? <p>No Available Jobs</p> :
                          jobs.map((data, index)=>{
                              return <Col key={index} lg={showFilterBar ? 6 : 4} md="6">
                              <CardHostComponent {...data}/>
                              </Col>;
                          })
                      }
                      </Row>}</>}
                    </CardBody>
                </Card> 
            </Col>

           { showFilterBar && <Col lg="4">
                <JobFilterBar 
                    filterJobs = {filterJobs} />
            </Col>}

        </Row>}
    </div>
}

const mapStateToProps = (state)=>{
    return {
        sid : state.user.sid,
        offer : state.user.offer,
    }
}

export default connect(mapStateToProps)(JobSearch);