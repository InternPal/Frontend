import React from "react";
import "./SubmissionPortal.css";

import { Row, Col, Card, CardHeader, CardBody, Table } from "reactstrap";
import {GrDocumentTime} from "react-icons/gr";

import SubmissionForm from "./SubmissionForm";

const SubmissionPortal = () => {
    return <div className="content">
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h5>Internship Evaluation</h5>
                    </CardHeader>
                    <CardBody>
                    <Table>
                    <tbody>
                        <tr>
                            <th scope="row" className="job-page-table-header">{"SID"}</th>
                            <td>{"19103007"}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="job-page-table-header">{"Name"}</th>
                            <td>{"Shivam Arora"}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="job-page-table-header">{"Alloted Mentor"}</th>
                            <td>{"Ms. Monika Bishnoi"}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="job-page-table-header">{"Grade Achieved"}</th>
                            <td>{"Not Available"}</td>
                        </tr>
                    </tbody>
                </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h5>Mid Internship Evaluation</h5>
                        <p><GrDocumentTime/> Deadline : {"21/10/2021 18:00"}</p>
                    </CardHeader>
                    <SubmissionForm/>
                </Card>
            </Col>
            <Col>
                <Card>
                    <CardHeader>
                        <h5>Final Evaluation</h5>
                        <p><GrDocumentTime/> Deadline : {"21/10/2021 18:00"}</p>
                    </CardHeader>
                    <SubmissionForm/>
                </Card>
            </Col>
        </Row>
    </div>
}

export default SubmissionPortal;