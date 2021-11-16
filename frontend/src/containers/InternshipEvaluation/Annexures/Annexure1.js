//add date of joining

import React from "react";
import {
    CardBody, FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button
} from "reactstrap";

const JoiningReport = (props) => {
    return <>
        <CardBody>
            <h5>Joining Report</h5>
            <Form>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>SID</label>
                            <Input
                                defaultValue={props.sid}
                                disabled
                                placeholder="SID"
                            />
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>
                                Name
                            </label>
                            <Input placeholder={props.name} disabled />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>Name of the Project</label>
                            <Input
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>

            <br /><br />
            <h6>Organization Details</h6>
            <Form>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Name & Address of the Organization"}</label>
                            <Input type="text" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Telephone No.</label>
                            <Input type="tel" />
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>E-mail</label>
                            <Input type="email" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>

            <br /><br />
            <h6>Project Site Details</h6>
            <Form>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Address of the Site"}</label>
                            <Input type="text" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Telephone No.</label>
                            <Input type="tel" />
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>E-mail</label>
                            <Input type="email" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>

            <br /><br />
            <h6>Student Details</h6>
            <Form>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Residential Address of the Student"}</label>
                            <Input type="text" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Telephone No.</label>
                            <Input type="tel" />
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>E-mail</label>
                            <Input type="email" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            <br />

            <Row>
                <div className="update ml-auto mr-auto"><center>
                    <Button
                        className="btn-round"
                        color="primary"
                        onClick={() => { }}
                    >
                        {"Save & Submit"}
                    </Button></center>
                </div>
            </Row>
        </CardBody>

        <CardBody>
            <h5>Certificate By The Industry Coordinator</h5>
            <p>{"Certified that the above-mentioned student has joined our organization for the project semester in the industry."}</p>
            <Form>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Name</label>
                            <Input type="text" defaultValue={"XYZ"} disabled />
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>Designation</label>
                            <Input type="text" />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Telephone No.</label>
                            <Input type="tel" />
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>E-mail</label>
                            <Input type="email" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            <br />

            <Row>
                <div className="update ml-auto mr-auto"><center>
                    <Button
                        className="btn-round"
                        color="primary"
                        onClick={() => { }}
                    >
                        {"Save & Submit"}
                    </Button></center>
                </div>
            </Row>

        </CardBody>
    </>
}

export default JoiningReport;