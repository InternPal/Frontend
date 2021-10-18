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
                    <CardTitle tag="h5">Registration Details</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>SID</label>
                                    <Input
                                        defaultValue="1910xxxx"
                                        placeholder="SID"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label for="exampleEmail">Email</label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="example@gmail.com" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label for="examplePassword">Password</label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Enter a valid password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label for="examplePassword">Confirm Password</label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Confirm password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                        >
                            {"Save & Continue"}
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default RegForm;