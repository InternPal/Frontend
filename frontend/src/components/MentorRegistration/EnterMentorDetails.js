import React, { useState } from "react";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

const EnterMentorDetails = (props) => {

    return (
        <div>
            <Card className="reg-card">
                <CardHeader className="reg-header">
                    <CardTitle tag="h5">Enter Mentor Details</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Mentor Name</label>
                                    <Input
                                        name="mentorName"
                                        placeholder="Mentor Name"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Personal Email ID</label>
                                    <Input type="email" name="email" placeholder="Personal email of Mentor" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label for="department">Department</label>
                                    <Input type="select" name="department" id="department">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Designation</label>
                                    <Input
                                        name="designation"
                                        placeholder="Enter the mentors' designation"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label for="contact">Contact Details</label>
                                    <Input type="text" name="contact" id="contact" placeholder="Enter mobile no." />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>  <div className="update ml-auto mr-auto"><center>
                            <Button
                                className="btn-round"
                                color="primary">
                                {"Confirm"}
                            </Button></center>
                        </div>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default EnterMentorDetails;