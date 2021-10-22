import React from "react";

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
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
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
                        <Row>  <div className="update ml-auto mr-auto">
                        <Button
                            className="btn-round"
                            color="primary"
                            onClick = {props.saveFunc}
                        >
                            {"Save & Continue"}
                        </Button>
                        </div>
</Row>                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default RegForm;