import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "../../axios";

import { Row, Col, Card, CardHeader, CardBody, Table } from "reactstrap";
import Accordion from 'react-bootstrap/Accordion'

import { BiErrorCircle } from "react-icons/bi";

//import Annexures
import Annexure1 from "./Annexures/Annexure1";
import Annexure3 from "./Annexures/Annexure3";
import Annexure4 from "./Annexures/Annexure4";
import Annexure9 from "./Annexures/Annexure9";
import Annexure10 from "./Annexures/Annexure10";

const StudentInternshipEvaluation = (props) => {

    const [evalData, setEvalData] = useState(null);

    useEffect(() => {
        axios.get("/evals/" + props.sid)
            .then((res) => {
                setEvalData(res.data);
            })
            .catch((err) => {
                alert(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className="content">
        {evalData !== null &&
            <>
                {evalData !== "" ? <><Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <h5>Internship Evaluation</h5>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="job-page-table-header" width="50%">{"SID"}</th>
                                            <td width="50%">{evalData.SID}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="job-page-table-header">{"Name"}</th>
                                            <td>{evalData.studentName}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="job-page-table-header">{"Faculty Coordinator"}</th>
                                            <td>{"ABC"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="job-page-table-header">{"Industry Coordinator"}</th>
                                            <td>{"XYZ"}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                    <Accordion>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Joining Report (Student) </Accordion.Header>
                            <Accordion.Body>
                                <Annexure1 sid = {evalData.SID} name = {evalData.studentName} />
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>First Visit Report (Faculty Coordinator) </Accordion.Header>
                            <Accordion.Body>
                                <Annexure3 sid = {evalData.SID} name = {evalData.studentName} />
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Second Visit Report (Faculty Coordinator) </Accordion.Header>
                            <Accordion.Body>
                                <Annexure4 sid = {evalData.SID} name = {evalData.studentName} />
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Industry Feedback Form (Industry Coordinator)</Accordion.Header>
                            <Accordion.Body>
                                <Annexure9 sid = {evalData.SID} name = {evalData.studentName} />
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Student Feedback Form (Student)</Accordion.Header>
                            <Accordion.Body>
                                <Annexure10 sid = {evalData.SID} name = {evalData.studentName} />
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                </> :
                    <Card>
                        <CardBody>
                            <center><BiErrorCircle size="60px" color="grey" /></center>
                            <br />
                            <center><h5>Evaluation Details Not Available</h5></center>
                        </CardBody>
                    </Card>} </>}
    </div>
}

const mapStateToProps = (state) => {
    return {
        sid: state.user.sid,
    };
}

export default connect(mapStateToProps)(StudentInternshipEvaluation);