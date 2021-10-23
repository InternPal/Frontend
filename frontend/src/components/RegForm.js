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

const RegForm = (props) => {

    const [regCred, setRegCred] = useState({
        SID: null,
        email: null,
        password: null
    });

    const changeHandler = (e) => {
        setRegCred((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        })
    }

    return (
        <div className="reg-form-div">
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
                                        name="SID"
                                        placeholder="SID"
                                        type="text"
                                        onChange={changeHandler}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Email</label>
                                    <Input type="email" name="email" placeholder="Email" onChange={changeHandler} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Password</label>
                                    <Input type="password" name="password" placeholder="Password" onChange={changeHandler} />
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
                                onClick={() => {
                                    // console.log(regCred)
                                    props.saveFunc(regCred);
                                }}
                            >
                                {"Save & Continue"}
                            </Button></center>
                        </div>
                        </Row>                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default RegForm;