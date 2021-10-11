import React from "react";

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
            <Card className="card-user">
                <CardHeader>
                    <CardTitle tag="h5">Add Basic Info</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col className="pr-1" md="6">
                                <FormGroup>
                                    <label>First Name</label>
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
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default RegForm;