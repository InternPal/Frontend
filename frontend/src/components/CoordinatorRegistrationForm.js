import React, { useState } from "react";
import axios from "../axios";

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
    FormText,
    FormFeedback
} from "reactstrap";

import { validationFunc } from "../formValidation";

const CoordinatorRegistrationForm = ({role}) => {

    const [coordinatorCreds, setcoordinatorCreds] = useState({
        email: null,
        name: null,
        password: null,
    });

    const changeHandler = (e) => {
        setcoordinatorCreds(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
        let flag = Boolean(validationFunc(e.target.name, e.target.value))
        setValidCRED((prev) => {
            return {
                ...prev,
                [e.target.name]: {
                    valid: flag,
                    invalid: !flag
                }
            }
        })
    }

    const validator = () => {
        let arr = Object.values(validCRED)
        return arr.reduce((flag, key) => {
            return (key.valid && flag)
        }, true);
    }

    const registercoordinator = () => {
        var confirm = window.confirm(`Confirm Registration ? `);
        if (confirm) {
            axios.post(`/${ role === "Industry" ? "industry" : "faculty" }Coordinator/`, coordinatorCreds)
                .then((_) => {
                    alert("Registration Successful");
                })
                .catch((err) => {
                    alert(err);
                })
        }
    }

    const [validCRED, setValidCRED] = useState({
        "name": { valid: false, invalid: false },
        "email": { valid: false, invalid: false },
        "password": { valid: false, invalid: false },
        "confirmPassword": { valid: false, invalid: false }
    })

    return (
        <div className="content">
            <Card>
                <CardHeader>
                    <CardTitle tag="h5">{role} Coordinator Registration</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>{role} Coordinator Name</label>
                                    <Input
                                        name="name"
                                        placeholder={role + " Coordinator Name"}
                                        type="text"
                                        onChange={changeHandler}
                                        valid={validCRED.name.valid}
                                        invalid={validCRED.name.invalid}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Email</label>
                                    <Input type="email" name="email" placeholder="Email Address" onChange={changeHandler} valid={validCRED.email.valid}
                                        invalid={validCRED.email.invalid} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Password</label>
                                    <Input type="password" name="password" placeholder="Password" onChange={changeHandler} valid={validCRED.password.valid}
                                        invalid={validCRED.password.invalid} />
                                    <FormText>
                                        Password must be 7-20 Characters long and must contain one numeric and one special character
                                    </FormText>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Confirm Password</label>
                                    <Input type="password" name="confirmPassword" placeholder="Confirm password" valid={validCRED.confirmPassword.valid}
                                        invalid={validCRED.confirmPassword.invalid} onChange={(e) => {
                                            setValidCRED(prev => {
                                                let flag = Boolean(e.target.value === coordinatorCreds.password);
                                                return {
                                                    ...prev,
                                                    confirmPassword: {
                                                        valid: flag, 
                                                        invalid: !flag
                                                    }
                                                }
                                            })
                                        }} />
                                    <FormFeedback>Does Not Match With Password</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>  <div className="update ml-auto mr-auto"><center>
                            <Button
                                className="btn-round"
                                color="primary"
                                onClick={registercoordinator}
                                disabled={!validator()}
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

export default CoordinatorRegistrationForm;