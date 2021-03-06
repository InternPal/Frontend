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
    FormText,
    FormFeedback
} from "reactstrap";

import { validationFunc } from "../formValidation";

const RegForm = (props) => {

    const [regCred, setRegCred] = useState({
        SID: null,
        email: null,
        password: null
    });

    const [validCRED, setValidCRED] = useState({
        "SID": { valid: false, invalid: false },
        "email": { valid: false, invalid: false },
        "password": { valid: false, invalid: false },
        "confirmPassword": { valid: false, invalid: false }
    })

    const validator = () => {
        let arr = Object.values(validCRED)
        return arr.reduce((flag, key) => {
            return (key.valid && flag)
        }, true);
    }

    const changeHandler = (e) => {
        setRegCred((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        })
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
                                        valid={validCRED.SID.valid}
                                        invalid={validCRED.SID.invalid}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Email</label>
                                    <Input type="email" name="email" placeholder="Email" onChange={changeHandler} valid={validCRED.email.valid}
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
                                                let flag = Boolean(e.target.value === regCred.password);
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
                                onClick={() => {
                                    props.saveFunc(regCred);
                                }}
                                disabled={!validator()}
                            >
                                {"Save & Continue"}
                            </Button></center>
                        </div>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default RegForm;