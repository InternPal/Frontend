import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { connect } from "react-redux";

import "./JobPage.css";

//demo purpose only
import FakeDoc from "./fakeDoc.pdf";

import { Card, CardHeader, CardBody, Table, Button } from "reactstrap";
import Badge from 'react-bootstrap/Badge';
import FlowChart from "./flowchart";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

const JobPage = (props) => {

    const jobId = props.match.params.id;
    console.log(jobId);

    const [Job, setJob] = useState(null);

    useEffect(() => {
        axios.get("/jobs/" + jobId)
            .then((res) => {
                setJob(res.data)
            })
            .catch((err) => {
                alert(err);
            })
    }, []);

    const applyJob = ()=>{
        var confirm = window.confirm("Confirm Job Application?");
        if(confirm){

            const jobApplicationCred = {
                studentID : props.id,
                SID : props.SID,
                jobID : jobId,
                jobCompany : Job.name,
                jobProfile : Job.profile,
                jobLocation : Job.location,
                status : "Applied"
            };

            axios.post("/jobApp", jobApplicationCred)
            .then((res)=>{
                console.log(res);
                alert("Applied To Job");
            })
            .catch((err)=>{
                alert(err);
            })
        }
    }

    return <div className="content">
        {Job !== null &&
            <Card>

                {/* Logo + Company Name + Profile + Location */}
                <CardHeader>
                    <img className="job-page-company-logo" src={"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"} alt="company logo" />
                    <h4 className="title">{Job.profile}</h4>
                    <p >{Job.name} . {Job.location}</p>
                    <Badge pill bg={
                        Job.jobType == "Internship" ? "info" : "success"
                    }>{Job.jobType}</Badge>
                </CardHeader>



                <br /><br />
                {/* Opening Overview */}
                <CardBody>
                    <h5>Opening Overview</h5>
                    <Card className="card-plain">
                        <CardBody>
                            <Table responsive>
                                <tbody>
                                    <tr>
                                        <td><h6 className="job-page-table-header">Category</h6></td>
                                        <td>{Job.tier}</td>
                                    </tr>
                                    <tr>
                                        <td><h6 className="job-page-table-header">Job Function(s)</h6></td>
                                        <td>{Job.jobFunction}</td>
                                    </tr>
                                    <tr>
                                        <td><h6 className="job-page-table-header">CTC / Stipend</h6></td>
                                        <td>{Job.pay}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>

                </CardBody>

                {/* Job Description */}
                <CardBody>
                    <h5>Job Description</h5><hr />
                    <p>{Job.description}</p>
                </CardBody>

                <br /><br />
                {/* Hiring Workflow */}
                <CardBody>
                    <h5>Hiring Workflow</h5><hr />
                    <FlowChart workflow={Job.hiringWorkflow} />
                </CardBody>

                <br /><br />
                {/* Attached Documents */}
                <CardBody>
                    <h5>Attached Documents</h5><hr />
                    <div className="job-file-links-div">
                        <a href={FakeDoc} target="_blank"><IoDocumentTextSharp size="20px" /> View Document</a>
                        <br />
                        <a href={FakeDoc} download><FiDownload size="20px" /> Download Document</a>
                    </div>
                </CardBody>



                <br /><br />
                {/* Eligibilty Criteria */}
                <CardBody>
                    <h5>Eligibilty Criteria</h5><hr />
                    <Table striped responsive>
                        <tbody>
                            <tr>
                                <td width="40%"><h6 className="display-user-page-table-header">Branches</h6></td>
                                <td width="60%">{Job.eligibility.branch.join(", ")}</td>
                            </tr>
                            <tr>
                                <td><h6 className="display-user-page-table-header">Min CGPA</h6></td>
                                <td>{Job.eligibility.cg}</td>
                            </tr>
                            <tr>
                                <td><h6 className="display-user-page-table-header">Allowed Backlogs</h6></td>
                                <td>{Job.eligibility.backlogs}</td>
                            </tr>
                            <tr>
                                <td><h6 className="display-user-page-table-header">Min XII Percentage</h6></td>
                                <td>{Job.eligibility.class12}</td>
                            </tr>
                            <tr>
                                <td><h6 className="display-user-page-table-header">Min X Percentage</h6></td>
                                <td>{Job.eligibility.class10}</td>
                            </tr>
                        </tbody>
                    </Table>

                    { props.role === "Student" &&
                        <div align="center">
                            <Button color="primary" className="btn-round" onClick={applyJob}>Apply For Job</Button>
                        </div>
                    }

                </CardBody>

            </Card>}
    </div>
}

const mapStateToProps = (state) => {
    return {
        role: state.user.role,
        SID: state.user.sid,
        name : state.user.name,
        id : state.user.id
    };
}

export default connect(mapStateToProps)(JobPage);