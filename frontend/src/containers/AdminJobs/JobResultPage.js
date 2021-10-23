import React, { useState } from "react";

import WorkflowResultTable from "./WorkflowResultTable";
import { Card, CardHeader, Badge, CardBody, Table, CardTitle, Button, Row, Col } from "reactstrap";

//demo
import job from "./fakeData";
import StudentData from "./StudentFakeData";

const JobResultPage = (props) => {
    //demo
    const index = props.match.params.id;

    //demo
    const [showTable, toggleTable] = useState(false);
    const [selectedActivity, changeActivity] = useState("");

    return <div className="content">
        <Card>
            <CardHeader>
                <img className="job-page-company-logo" src={job[index].imgSrc} />
                <h4 className="title">{job[index].jobProfile}</h4>
                <p >{job[index].company} . {job[index].location}</p>
                <Badge color="info" pill>Internship</Badge>
            </CardHeader>

            <WorkflowResultTable
                showResultsFunc={(event, activity) => {
                    event.preventDefault();
                    toggleTable(true)
                    changeActivity(activity)
                }}
            />
        </Card>

        {showTable && <Card>

            <CardHeader>
                <CardTitle tag="h4">{selectedActivity}</CardTitle>
            </CardHeader>
            <CardBody>
                <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>#</th>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th className="text-right">{
                                selectedActivity === "Offer" ? "Result" : "Status for next round"
                            }</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </Table>

                <Row>
                <div className="update ml-auto mr-auto">
                    <Button
                        className="btn-round"
                        color="primary"
                    >
                        {"Save Changes"}
                    </Button>
                    {"   "}
                    <Button
                        className="btn-round"
                        color="danger"
                    >
                        {"Cancel"}
                    </Button>
                </div>
                </Row>
            </CardBody>

        </Card>}
    </div>
}

export default JobResultPage;