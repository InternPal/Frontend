import React from "react";
import "./JobPage.css";

//demo purpose only
import Job from "./fakeJobData";
import FakeDoc from "./fakeDoc.pdf";

import { Card, CardHeader, CardBody, Table } from "reactstrap";
import Badge from 'react-bootstrap/Badge';
import FlowChart from "./flowchart";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

const JobPage = () => {
    return <div className="content">
        <Card>

            {/* Logo + Company Name + Profile + Location */}
            <CardHeader>
                <img className="job-page-company-logo" src={Job.logo} />
                <h4 className="title">{Job.profile}</h4>
                <p >{Job.company} . {Job.location}</p>
                <Badge bg="info" pill>Internship</Badge>
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
                                    <td>{Job.category}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="job-page-table-header">Job Function(s)</h6></td>
                                    <td>{Job.jobFunction}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="job-page-table-header">CTC / Stipend</h6></td>
                                    <td>{Job["CTC/Stipend"]}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
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
                <FlowChart workflow={Job.HiringWorkflow} />
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
                <Table striped>
                    <tbody>
                        {Object.keys(Job.elegibilityCriteria).map((key) => {
                            return <tr>
                                <th scope="row" className="job-page-table-header">{key}</th>
                                <td>{Job.elegibilityCriteria[key]}</td>
                            </tr>
                        })}
                    </tbody>
                </Table>

            </CardBody>

        </Card>      
    </div>
}

export default JobPage;