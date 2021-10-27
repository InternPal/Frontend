import React, { useState } from "react";
import EnterMentorDetails from "./EnterMentorDetails";

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

const MentorRegistrationForm = (props) => {

    return (
        <div>
            <Card className="reg-card">
                <CardHeader className="reg-header">
                    <CardTitle tag="h5">Mentor Registration</CardTitle>
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
                                    <label>Email</label>
                                    <Input type="email" name="email" placeholder="Enter college email of mentor" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Confirm Email</label>
                                    <Input type="email" name="email" placeholder="Retype the email above" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Password</label>
                                    <Input type="password" name="password" placeholder="Assign a unique password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Confirm Password</label>
                                    <Input type="password" name="password" placeholder="Confirm password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>  <div className="update ml-auto mr-auto"><center>
                            <Button
                                className="btn-round"
                                color="primary"
                            // onClick = {props.saveFunc}

                            >
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

export default MentorRegistrationForm;