import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { connect } from "react-redux";

import "./JobPage.css";
import {
    Card, CardHeader, CardBody, Table, Button,
    Modal, ModalBody, ModalHeader, ModalFooter,
} from "reactstrap";

import FlowChart from "./flowchart";
// import Chatbot from "../chatbot";

import Badge from 'react-bootstrap/Badge';
import { IoDocumentTextSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";


const JobPage = (props) => {

    const jobId = props.match.params.id;

    const [Job, setJob] = useState(null);
    const [showModal, toggleModal] = useState(false);

    const displayModal = () => {
        toggleModal(true);
    }
    const hideModal = () => {
        toggleModal(false);
    }

    useEffect(() => {
        axios.get("/jobs/" + jobId)
            .then((res) => {
                setJob(res.data)
            })
            .catch((err) => {
                alert(err);
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const applyJob = () => {

        //check if already applied
        axios.get("/jobApp/applied/" + jobId + "/" + +props.SID)
            .then((res) => {
                if (res.data) {
                    alert("Already Applied");
                    console.log(res);
                }
                else {
                    var confirm = window.confirm("Confirm Job Application?");
                    if (confirm) {

                        const jobApplicationCred = {
                            studentID: props.id,
                            SID: props.SID,
                            studentName: props.name,
                            jobID: jobId,
                            jobCompany: Job.name,
                            jobProfile: Job.profile,
                            jobLocation: Job.location,
                            status: "Applied"
                        };

                        axios.post("/jobApp", jobApplicationCred)
                            .then((res) => {
                                alert("Applied To Job");
                            })
                            .catch((err) => {
                                alert(err);
                            })
                    }
                }
            })
            .catch((err) => {
                alert(err);
            })


    }

    return <div className="content">
        {Job !== null &&
            <Card>

                {/* Logo + Company Name + Profile + Location */}
                <CardHeader>
                    <img className="job-page-company-logo" src={Job.logo} alt="company logo" />
                    <h4 className="title">{Job.profile}</h4>
                    <p >{Job.name} . {Job.location}</p>
                    <Badge pill bg={
                        Job.jobType === "Internship" ? "info" : "success"
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
                {Job.jobDoc !== null && <CardBody>
                    <h5>Attached Documents</h5><hr />
                    <div className="job-file-links-div">
                        <Button className="btn-round" color="primary" onClick={displayModal}><IoDocumentTextSharp size="18px" /> View Document</Button>{" "}
                        <Button className="btn-round" color="primary">
                            <a style={{
                                color: "white"
                            }} href={Job.jobDoc} download><FiDownload size="18px" /> Download Document</a></Button>
                    </div>
                </CardBody>}



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

                    <Modal
                        centered
                        fullscreen={true}
                        scrollable
                        size="lg"
                        toggle={hideModal}
                        isOpen={showModal}
                    >
                        <ModalHeader
                            toggle={hideModal}
                        >
                            {"Attached Document"}
                        </ModalHeader>
                        <ModalBody>
                            <center>
                                <object type="application/pdf" data={Job.jobDoc} className="doc-display" aria-label="doc"></object>
                            </center>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={hideModal} className="btn-round" color="primary">
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>


                    {props.role === "Student" &&
                        <div align="center">
                            <Button color="primary" className="btn-round" onClick={applyJob}>Apply For Job</Button>
                        </div>
                    }

                </CardBody>
               {/* {props.role === "Student" && <Chatbot job = {Job}/>} */}
            </Card>}
    </div>
}

const mapStateToProps = (state) => {
    return {
        role: state.user.role,
        SID: state.user.sid,
        name: state.user.name,
        id: state.user.id
    };
}

export default connect(mapStateToProps)(JobPage);