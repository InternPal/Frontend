import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { Card, CardHeader, CardBody, Table, Button, Row,} from "reactstrap";
import Badge from 'react-bootstrap/Badge';
import {BiLock} from "react-icons/bi";

import JobStatusModal from "./JobStatusModal";

const JobResultPage = (props) => {

    const jobID = props.match.params.id;

    const [job, setJobData] = useState(null);

    useEffect(()=>{
        axios.get("/jobs/"+jobID)
        .then((res)=>{
            setJobData(res.data);
        })
        .catch((err)=>{
            alert(err);
        })
    }, []);

    const [modalInfo, setModalInfo] = useState({
        sid : null,
        name : null,
        initialStatus : null,
        isOpen : false,
        jobID : jobID,
        refresh : null,
    });

    const showModal = (sid, name, status)=>{
        setModalInfo(prev=>{
            return {
                ...prev,
                isOpen : true,
                sid : sid,
                name : name,
                status : status,
                jobID : jobID,
                refresh : searchApplicants
            };
        })
    }

    const hideModal = ()=>{
        setModalInfo(prev=>{
            return {
                ...prev,
                isOpen : false
            };
        })
    }

    const [applicants, setApplicants] = useState(null);

    const searchApplicants = ()=>{
        axios.get("/jobApp/" + jobID)
        .then((res)=>{
            setApplicants(res.data);
        })
        .catch((err)=>{
            alert(err);
        });
    }

    return <div className="content">
        { job !== null &&
        <Card>
            <CardHeader>
                <img className="job-page-company-logo" src={job.logo} alt="Logo" />
                <h4 className="title">{job.profile}</h4>
                <p >{job.name} . {job.location}</p>
                <Badge pill bg={
                        job.jobType == "Internship" ? "info" : "success"
                    }>{job.jobType}</Badge>
            </CardHeader>
            <br/><br/>

            <CardBody>
                <h5>Hiring Workflow</h5>
                <hr/>
                <Table striped responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Activity</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                        {job.hiringWorkflow.map((wf, index)=>{
                            return  <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{wf.title}</td>
                                <td>{wf.date}</td>
                                <td>{wf.time}</td>
                            </tr>
                        })}
                       
                    </tbody>    
                </Table>
            </CardBody>
            
            <CardBody>
                <Row>
                    <center>
                        <Button className="btn-round" color="primary" onClick={searchApplicants}>View Applicants</Button>
                    </center>
                </Row>
            </CardBody>

        </Card>
}
         
        {applicants !== null && <Card>
            <CardBody>
              { applicants.length === 0 ? <h5>No Applicants</h5>
               :  <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>#</th>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applicants.map((a, index) => {
                                return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{a.SID}</td>
                                    <td>{a.studentName}</td>
                                    <td>{a.status}</td>
                                    <td className="text-right">
                                        { a.status === 'Applied' ? 
                                        <a href="#" onClick={()=>{
                                            showModal(a.SID, a.studentName, a.status)
                                        }}>Click To Change Status</a>
                                        :
                                        <><BiLock size="18px"/>{"Status Locked"}</>
                                    }
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>}
            </CardBody>
            <JobStatusModal hideModal = {hideModal} modalInfo = {modalInfo} />
        </Card>}
    </div>
}

export default JobResultPage;