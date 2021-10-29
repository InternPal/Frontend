import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { Card, CardHeader, CardBody, Table, Button, Row, Col } from "reactstrap";
import Badge from 'react-bootstrap/Badge';


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
                            <th className="text-right">Status</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {
                            StudentData.map((student, index) => {
                                return <tr key={index}>
                                    <td>{index}</td>
                                    <td>{student.SID}</td>
                                    <td>{student.Name}</td>
                                    <td className="text-right">
                                        {index === 0 && <div style={{ color: "green" }}>{selectedActivity === "Offer" ? "Accepted" : "Eligible"}</div>}
                                        {index === 1 && <div style={{ color: "red" }}>{selectedActivity === "Offer" ? "Rejected" : "Not Eligible"}</div>}
                                        {index > 1 && <div>
                                            <Row>
                                                <Col>
                                                    <Button outline
                                                    className="btn-round"
                                                    color="success">{selectedActivity === "Offer" ? "Accepted" : "Eligible"}
                                                        </Button></Col>
                                                <Col>
                                                    <Button outline
                                                        className="btn-round"
                                                        color="danger">{selectedActivity === "Offer" ? "Rejected" : "Not Eligible"}
                                                            </Button></Col>
                                            </Row>
                                        </div>}
                                    </td>
                                </tr>
                            })
                        }
                    </tbody> */}
                </Table>}
            </CardBody>

        </Card>}
    </div>
}

export default JobResultPage;