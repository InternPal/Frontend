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
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";

const EnterJobDetails = () => {
    return <div>
        <Card className="card-user">
            <CardHeader>
                <CardTitle tag="h5">Enter Job Details</CardTitle>
            </CardHeader>
            <CardBody>
                <Form>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <label>Company</label>
                                <Input
                                    defaultValue="JP Morgan"
                                    placeholder="Enter Company Name"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label>Profile</label>
                                <Input type="select">
                                    <option>Software Developer</option>
                                    <option>Corporate Analyst</option>
                                    <option>Consultancy</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Location</label>
                                <Input
                                    defaultValue="Mumbai"
                                    placeholder="Location"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label>CTC/Stipend</label>
                                <Input placeholder="CTC/Stipend" type="text" />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Category</label>
                                <Input type="select">
                                    <option>Tier 1</option>
                                    <option>Tier 2</option>
                                    <option>Tier 3</option>
                                    <option>OTA</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <label for="exampleText">Job Description</label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label for="jobdetails">Attach Job Details</label>
                                <Input type="file" id="jobdetails" name="customFile" />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label for="logo">Attach Logo</label>
                                <Input type="file" id="logo" name="companylogo" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <label>Branches Allowed</label>
                                <Input
                                    defaultValue="All"
                                    placeholder="Enter the branches eligible for this job"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">

                            <FormGroup>
                                <label>CGPA(UG)</label>
                                <Input
                                    defaultValue="Required 7.0"
                                    placeholder="Enter min. CG for eligibility"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label for="exampleSelect">Backlogs</label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>No Backlogs</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>No restrictions</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">

                            <FormGroup>
                                <label>Class XII(Percentage)</label>
                                <Input
                                    defaultValue="Required 75%"
                                    placeholder="Enter your Class XII Percentage"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Class X(Percentage)</label>
                                <Input
                                    defaultValue="Required 75%"
                                    placeholder="Enter your Class X Percentage"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <div className="update ml-auto mr-auto">
                            <Button
                                className="btn-round"
                                color="primary"
                                type="submit"
                            >
                                {"Save & Continue"}
                            </Button>
                        </div>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    </div>
}

export default EnterJobDetails;