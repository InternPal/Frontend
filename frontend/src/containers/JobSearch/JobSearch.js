import React, { useState, useEffect } from "react";
import axios from "../../axios";
import {connect} from "react-redux";

import { Row, Button, Card, Col, CardBody, CardHeader } from "reactstrap";
import { FiFilter } from "react-icons/fi";

import JobFilterBar from "../../components/JobFilterBar/JobFilterBar";
import CardHostComponent from "../../components/CardHostComponent/CardHostComponent";


const JobSearch = (props) => {
    const [showFilterBar, toggleFilterBar] = useState(false);
    const [jobs, setJobs] = useState(null);

    useEffect(()=>{
        axios.get("/students/filter/" + props.sid)
        .then((res)=>{
            console.log(res);
            setJobs(res.data);
        })
        .catch((err)=>{
            alert(err);
        })
    }, []);

    return <div className="content">
        
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
                    { jobs !== null && 
                        <Row>
                      {
                          jobs.map(data=>{
                              return <Col lg={showFilterBar ? 6 : 4} md="6">
                              <CardHostComponent {...data}/>
                              </Col>;
                          })
                      }
                      </Row>}
                    </CardBody>
                </Card> 
            </Col>

           { showFilterBar && <Col lg="4">
                <JobFilterBar />
            </Col>}

        </Row>
    </div>
}

const mapStateToProps = (state)=>{
    return {
        sid : state.user.sid
    }
}

export default connect(mapStateToProps)(JobSearch);