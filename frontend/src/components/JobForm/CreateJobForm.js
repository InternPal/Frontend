import React from "react";
import "./HiringWorkflow";

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
import HiringWorkflow from "./HiringWorkflow";

const Profiles = ["---Select---","Software Developer", "Frontend Developer", "Backend Developer", "Finance", "Operations", "Data Science", "Fintech"];

const Branches = ["Aerospace Engineering",
        "Civil Engineering",
        "Computer Science & Engineering",
        "Electrical Engineering",
        "Electronics and Communication Engineering",
        "Mechanical Engineering",
        "Metallurgical & Materials Engineering",
        "Production and Industrial Engineering"];


const CreateJobForm = () => {
    return <div className="content">
        <Card className="card-user">
            <CardHeader>
                <CardTitle tag="h5">Enter Job Details</CardTitle>
            </CardHeader>
            <CardBody>
                <Form>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label>Company</label>
                                <Input
                                    placeholder="Enter Company Name"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>

                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Profile</label>
                                <Input type="select">
                                    {Profiles.map(profile=><option key={profile}>{profile}</option>)}
                                </Input>
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label>Job Function</label>
                                <Input type="text" placeholder="Enter Job Function"/>
                            </FormGroup>
                        </Col>

                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Category</label>
                                <Input type="select">
                                <option>---Select---</option>
                                    <option>Tier 0</option>
                                    <option>Tier 1</option>
                                    <option>Tier 2</option>
                                    <option>Tier 3</option>
                                </Input>
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label>CTC/Stipend</label>
                                <Input placeholder="CTC/Stipend" type="number" />
                            </FormGroup>
                        </Col>

                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Location</label>
                                <Input
                                    placeholder="Location"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <label>Job Description</label>
                                <Input type="textarea" name="text"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label for="logo">Attach Logo</label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                        <FormGroup>
                                <label>Attach Job Details</label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <label>Branches Allowed (Press "ctrl" or "command" to select multiple)</label>
                                <Input type="select" multiple>
                                    {Branches.map(branch=><option key={branch}>{branch}</option>)}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">

                            <FormGroup>
                                <label>CGPA(UG)</label>
                                <Input
                                    placeholder="Enter Min CGPA"
                                    type="number"
                                    step = "0.01"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label for="exampleSelect">Backlogs</label>
                                <Input type="number" step="1" placeholder="Number of Backlogs allowed"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">

                            <FormGroup>
                                <label>Class XII(Percentage)</label>
                                <Input
                                    placeholder="Min Class XII Percentage"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Class X(Percentage)</label>
                                <Input
                                    placeholder="Min Class X Percentage"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <HiringWorkflow/>
                    <Row>
                        <div className="update ml-auto mr-auto"><center>
                            <Button
                                className="btn-round"
                                color="primary"
                                type="submit"
                            >
                                {"Save & Continue"}
                            </Button></center>
                        </div>
                    </Row>
                    
                </Form>
            </CardBody>
        </Card>
    </div>
}

export default CreateJobForm;