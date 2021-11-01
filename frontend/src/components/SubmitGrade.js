import React, { useState, useEffect } from "react";
import axios from "../axios";

import { connect } from "react-redux";

import { Card, CardBody, Table, Modal, ModalHeader, ModalBody, Input, Button, Row, Col } from "reactstrap";

const SubmitGrade = (props) => {

    const sid = props.match.params.id;

    const [evalData, setEvalData] = useState(null);

    useEffect(() => {
        axios.get("/evals/" + sid)
            .then((res) => {
                setEvalData(res.data);
            })
            .catch((err) => {
                alert(err);
            })
    }, []);

    const [showModal, toggleModal] = useState(false);
    const [modalData, setModalData] = useState({
        title: null,
        data: null
    });

    const [grade, setGrade] = useState(null);

    const submitGrade = () => {
        let confirm = window.confirm("Confirm Grade Submission ?");
        if (confirm) {
            axios.post(( props.role === "Admin" ? "/eval/panelGrade" :  "/eval/mentorGrade"), {
                SID: sid,
                number: grade
            })
                .then((res) => {
                    alert("Grade Submitted");
                    axios.get("/evals/" + sid)
                        .then((res) => {
                            setEvalData(res.data);
                        })
                        .catch((err) => {
                            alert(err);
                        })
                })
                .catch((err) => {
                    alert(err);
                })
        }
    }

    return <div className="content">
        {evalData !== null && <Card>
            <CardBody>
                <h5>Grade Student</h5>
                <Table responsive>
                    <tbody>
                        <tr>
                            <th scope="row" className="job-page-table-header">{"Student ID"}</th>
                            <td>{evalData.SID}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="job-page-table-header">{"Student Name"}</th>
                            <td>{evalData.studentName}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="job-page-table-header">{"Mentor Grade"}</th>
                            <td>{
                                evalData.mentorGrade === null ? "N.A."
                                    : evalData.mentorGrade
                            }</td>
                        </tr>
                        <tr>
                            <th scope="row" className="job-page-table-header">{"Panel Grade"}</th>
                            <td>{
                                evalData.panelGrade === null ? "N.A."
                                    : evalData.panelGrade
                            }</td>
                        </tr>
                        <tr>
                            <th scope="row" className="job-page-table-header">{"Final Grade"}</th>
                            <td>{
                                evalData.finalGrade === null ? "N.A."
                                    : evalData.finalGrade
                            }</td>
                        </tr>

                        <tr>
                            <th scope="row" className="job-page-table-header">{"Mid-Internship Report"}</th>
                            <td style={{
                                color: "#51cbce",
                                cursor: "pointer"
                            }} onClick={() => {
                                setModalData({
                                    title: "Mid-Internship Report",
                                    data: evalData.midtermReport
                                });
                                toggleModal(true);
                            }}>View Report</td>
                        </tr>

                        <tr>
                            <th scope="row" className="job-page-table-header">{"Final Report"}</th>
                            <td style={{
                                color: "#51cbce",
                                cursor: "pointer"
                            }} onClick={() => {
                                setModalData({
                                    title: "Final Report",
                                    data: evalData.finalReport
                                });
                                toggleModal(true);
                            }}>View Report</td>
                        </tr>

                    </tbody>
                </Table>
            </CardBody>

            {evalData.mentorGrade === null && props.role === "Mentor" &&
                <CardBody>
                    <h5>
                        Submit Mentor Grade
                    </h5>
                    <Row>
                        <Col>
                            <Input
                                type="number"
                                min="0"
                                max="10"
                                step="1"
                                onChange={(e) => {
                                    setGrade(+e.target.value);
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <center>
                                <Button className="btn-round" color="primary" onClick={submitGrade}>
                                    Submit
                                </Button>
                            </center>
                        </Col>
                    </Row>
                </CardBody>}

                {evalData.panelGrade === null && props.role === "Admin" &&
                <CardBody>
                    <h5>
                        Submit Panel Grade
                    </h5>
                    <Row>
                        <Col>
                            <Input
                                type="number"
                                min="0"
                                max="10"
                                step="1"
                                onChange={(e) => {
                                    setGrade(+e.target.value);
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <center>
                                <Button className="btn-round" color="primary" onClick={submitGrade}>
                                    Submit
                                </Button>
                            </center>
                        </Col>
                    </Row>
                </CardBody>}
        </Card>}

        

        <div>
            <Modal
                isOpen={showModal}
                toggle={() => { toggleModal(false); }}
                size="lg"
            >
                <ModalHeader toggle={() => { toggleModal(false); }}>
                    {modalData.title}
                </ModalHeader>
                <ModalBody>
                    <center> <object style={{
                        width: "80%",
                        height: "600px"
                    }} type="application/pdf" data={modalData.data}></object> </center>
                </ModalBody>
            </Modal>
        </div>
    </div>
}

const mapStateToProps = (state)=>{
    return {
        role : state.user.role
    };
}

export default connect(mapStateToProps)(SubmitGrade);