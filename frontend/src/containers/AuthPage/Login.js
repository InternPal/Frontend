import React from "react";

import { CardBody, Form, Row, Col, FormGroup, Input, Button } from "reactstrap";

const Login = () => {
    return <CardBody>
        <Form>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label htmlFor="role">
                            Select Role
                        </label>
                        <Input type="select">
                            <option>{"---Select---"}</option>
                            <option>{"Admin"}</option>
                            <option>{"Mentor"}</option>
                            <option>{"Student"}</option>
                        </Input>
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
                        <label for="examplePassword">Password</label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <div className="update ml-auto mr-auto">
                    <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        href="/"
                    >
                        {"Sign In"}
                    </Button>
                </div>
            </Row>
        </Form>
    </CardBody>
}

export default Login;