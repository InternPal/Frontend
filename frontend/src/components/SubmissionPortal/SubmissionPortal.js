import React, { useState, useEffect } from "react";
import "./SubmissionPortal.css";
import axios from "../../axios";
import { connect } from "react-redux";

import { Row, Col, Card, CardHeader, CardBody, Table } from "reactstrap";

import SubmissionForm from "./SubmissionForm";


const SubmissionPortal = (props) => {

    const [evalData, setEvalData] = useState(null);

    useEffect(() => {
        axios.get("/evals/" + props.sid)
            .then((res) => {
                setEvalData(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    const midSubmission = (report) => {
        let confirm = window.confirm("Confirm Submission ?");

        if (confirm) {
            axios.post("/eval/midReport", {
                SID: evalData.SID,
                string: report
            })
                .then((res) => {
                    alert("Submission Success");
                })
                .catch((err) => {
                    alert(err);
                })
        }
    }

    const finalSubmission = (report) => {
        let confirm = window.confirm("Confirm Submission ?");

        if (confirm) {
            axios.post("/eval/finalReport", {
                SID: evalData.SID,
                string: report
            })
                .then((res) => {
                    alert("Submission Success");
                })
                .catch((err) => {
                    alert(err);
                })
        }
    }

    return <div className="content">
        {evalData !== null &&
            <>   <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <h5>Internship Evaluation</h5>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="job-page-table-header">{"SID"}</th>
                                        <td>{evalData.SID}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="job-page-table-header">{"Name"}</th>
                                        <td>{evalData.studentName}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="job-page-table-header">{"Alloted Mentor"}</th>
                                        <td>{evalData.mentorName}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="job-page-table-header">{"Mentor Grade"}</th>
                                        <td>{evalData.mentorGrade === null ? "N.A." : evalData.mentorGrade}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="job-page-table-header">{"Panel Grade"}</th>
                                        <td>{evalData.panelGrade === null ? "N.A." : evalData.panelGrade}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="job-page-table-header">{"Final Grade"}</th>
                                        <td>{evalData.finalGrade === null ? "N.A." : evalData.finalGrade}</td>
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
                            </CardHeader>
                            <SubmissionForm submitFunc={midSubmission} />
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>
                                <h5>Final Evaluation</h5>
                            </CardHeader>
                            <SubmissionForm submitFunc={finalSubmission}/>
                        </Card>
                    </Col>
                </Row></>}
    </div>
}

const mapStateToProps = (state) => {
    return {
        sid: state.user.sid
    };
}

export default connect(mapStateToProps)(SubmissionPortal);