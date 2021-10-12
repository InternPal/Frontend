import React from "react";
import './RegForm.css';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    // CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

const RegForm = () => {
    return (
        <div>
            <Card className="reg-card">
                <CardHeader className="reg-header">
                    <CardTitle tag="h5">Login</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col className="pr-1" md="12">
                                <FormGroup>
                                    <label>Full Name</label>
                                    <Input
                                        defaultValue="Chet"
                                        placeholder="Company"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>SID</label>
                                    <Input
                                        defaultValue="19103007"
                                        disabled
                                        placeholder="SID"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label htmlFor="exampleInputEmail1">
                                        Email address
                                    </label>
                                    <Input placeholder="Email" type="email" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label for="examplePassword" hidden>Password</label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                        >
                            {"Login"}
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default RegForm;