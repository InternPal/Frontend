import React, { useState } from "react";
import "./HiringWorkflow";
import { connect } from "react-redux";
import { postJobs } from "../../store/Actions/AdminActions";
import Select from 'react-select';

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

const Profiles = ["---Select---", "Software Developer", "Frontend Developer", "Backend Developer", "Finance", "Operations", "Data Science", "Fintech"];

const Branches = [{ label: "Aerospace Engineering", value: "Aerospace Engineering" },
{ label: "Civil Engineering", value: "Civil Engineering" },
{ label: "Computer Science & Engineering", value: "Computer Science & Engineering" },
{ label: "Electrical Engineering", value: "Electrical Engineering" },
{ label: "Electronics and Communication Engineering", value: "Electronics and Communication Engineering" },
{ label: "Mechanical Engineering", value: "Mechanical Engineering" },
{ label: "Metallurgical & Materials Engineering", value: "Metallurgical & Materials Engineering" },
{ label: "Production and Industrial Engineering", value: "Production and Industrial Engineering" },];


const CreateJobForm = (props) => {

    const [jobCreds, setJobCreds] = useState({
        name: null,
        profile: null,
        location: null,
        jobFunction: null,
        pay: null,
        tier: null,
        description: null,
        hiringWorkflow: null,
        jobType: null,
        eligibility: {
            cg: null,
            branch: [],
            backlogs: null,
            class10: null,
            class12: null
        }
    });

    const changeHandler = (e) => {
        setJobCreds(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        })
    }

    const changeEligibilty = (e) => {
        setJobCreds(prev => {
            prev.eligibility[e.target.name] = +e.target.value;
            return prev;
        })
    }

    const setHiringWorkflowArray = (l) => {
        setJobCreds(prev => {
            return {
                ...prev,
                hiringWorkflow: Array.from({ length: l }, (_, i) => i).map(_ => {
                    return {
                        title: null,
                        description: null,
                        date: null,
                        time: null
                    }
                })
            };
        })
    }

    const changeHiringWorkflow = (index, name, value) => {
        setJobCreds(prev => {
            prev.hiringWorkflow[index][name] = value
            return prev;
        })
    }


    return <div className="content">
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
                                    placeholder="Enter Company Name"
                                    type="text"
                                    name="name"
                                    onChange={changeHandler}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label>Job Type</label>
                                <Input
                                    type="select"
                                    name="jobType"
                                    onChange={changeHandler}
                                >
                                    <option>---Select---</option>
                                    <option>Internship</option>
                                    <option>Full Time</option>
                                </Input>
                            </FormGroup>
                        </Col>

                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Profile</label>
                                <Input type="select" name="profile" onChange={changeHandler}>
                                    {Profiles.map(profile => <option key={profile}>{profile}</option>)}
                                </Input>
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label>Job Function</label>
                                <Input type="text" placeholder="Enter Job Function"
                                    name="jobFunction"
                                    onChange={changeHandler}
                                />
                            </FormGroup>
                        </Col>

                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Category</label>
                                <Input type="select" name="tier" onChange={changeHandler}>
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
                                <Input placeholder="CTC/Stipend" type="number" name="pay" onChange={changeHandler} />
                            </FormGroup>
                        </Col>

                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Location</label>
                                <Input
                                    placeholder="Location"
                                    type="text"
                                    name="location"
                                    onChange={changeHandler}
                                />
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <label>Job Description</label>
                                <Input type="textarea" name="description" onChange={changeHandler} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label for="logo">Attach Logo</label>
                                <Input type="file" />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Attach Job Details</label>
                                <Input type="file" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
            <br /><br />


            <CardBody>
                <h5>Enter Eligibilty Criteria</h5>
                <Form>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <label>Branches Allowed</label>
                                <Select
                                    isMulti
                                    name=""
                                    options={Branches}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={e => {
                                        setJobCreds(prev => {
                                            prev.eligibility.branch = e.map(o => o.value)
                                            return prev;
                                        })
                                    }}
                                />

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
                                    step="0.01"
                                    name="cg"
                                    onChange={changeEligibilty}
                                />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label for="exampleSelect">Backlogs</label>
                                <Input type="number" step="1" placeholder="Number of Backlogs allowed" name="backlogs" onChange={changeEligibilty} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">

                            <FormGroup>
                                <label>Class XII(Percentage)</label>
                                <Input
                                    placeholder="Min Class XII Percentage"
                                    type="number"
                                    name="class12"
                                    onChange={changeEligibilty}
                                />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Class X(Percentage)</label>
                                <Input
                                    placeholder="Min Class X Percentage"
                                    type="number"
                                    name="class10"
                                    onChange={changeEligibilty}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
            <br /><br />

            <CardBody>
                <h5>Enter Hiring Workflow</h5>
                <Form>
                    <HiringWorkflow
                        setHiringWorkflowArray={setHiringWorkflowArray}
                        changeHiringWorkflow={changeHiringWorkflow}
                    />
                </Form>
            </CardBody>

            <Row>
                <div className="update ml-auto mr-auto"><center>
                    <Button
                        className="btn-round"
                        color="primary"
                        onClick={() => {
                            var flag = window.confirm("Confirm Post Job?");
                            if (flag) {
                                console.log(jobCreds);
                                console.log(jobCreds.eligibility.branch)
                                // props.postJob(jobCreds)
                            }
                            else {
                                console.log("No");
                            }
                        }}
                    >
                        {"Post Job"}
                    </Button></center>
                </div>
            </Row>
        </Card>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        postJob: (jobCreds) => dispatch(postJobs(jobCreds)),
    };
}

export default connect(null, mapDispatchToProps)(CreateJobForm);