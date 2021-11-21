import React, { useState } from "react";
import axios from "../../../axios";
import { connect } from "react-redux";

import {
    CardBody, FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button
} from "reactstrap";

const JoiningReport = (props) => {

    const isStudent = props.role === "Student";
    const isIndustryCoordinator = props.role === "Industry Coordinator";

    const [joiningReport, setJoiningReport] = useState({
        ...props.eval.joiningReport
    })

    const submitHandler = () => {
        const confirm = window.confirm("Confirm Changes ? ");
        if (confirm) {
            axios.post("/eval/specials", {
                id: props.eval._id,
                key: "joiningReport",
                value: joiningReport
            }).then((_) => {
                alert("Changes Saved Successfully");
            }).catch((err) => {
                alert(err);
            })
        }
    }

    const changeHandler = (e) => {
        setJoiningReport((prev)=>{
            return {
                ...prev,
                [e.target.name] : e.target.value
            };
        })
    }

    return <>
        <CardBody>
            <h5>Joining Report</h5>
            <Form>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>SID</label>
                            <Input
                                defaultValue={props.eval.SID}
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
                            <Input defaultValue={props.eval.studentName} disabled />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>Name of the Project</label>
                            <Input
                                type="text"
                                disabled = {!isStudent}
                                name = "ProjectName"
                                defaultValue = {joiningReport.ProjectName}
                                onChange = {changeHandler}
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
                            <Input type="text" 
                            disabled = {!isStudent}
                            name = "OrganizationNameAndAddress"
                            defaultValue = {joiningReport.OrganizationNameAndAddress}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Date of Joining"}</label>
                            <Input type="date" 
                            disabled = {!isStudent}
                            name = "dateOfJoining"
                            defaultValue = {joiningReport.dateOfJoining}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Telephone No.</label>
                            <Input type="tel" 
                             disabled = {!isStudent}
                             name = "organizationPhone"
                             defaultValue = {joiningReport.organizationPhone}
                             onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>E-mail</label>
                            <Input type="email"
                             disabled = {!isStudent}
                             name = "organizationEmail"
                             defaultValue = {joiningReport.organizationEmail}
                             onChange = {changeHandler} />
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
                            <Input type="text" 
                            disabled = {!isStudent}
                            name = "siteAddress"
                            defaultValue = {joiningReport.siteAddress}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Telephone No.</label>
                            <Input type="tel" 
                            disabled = {!isStudent}
                            name = "sitePhone"
                            defaultValue = {joiningReport.sitePhone}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>E-mail</label>
                            <Input type="email" 
                            disabled = {!isStudent}
                            name = "siteEmail"
                            defaultValue = {joiningReport.siteEmail}
                            onChange = {changeHandler}/>
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
                            <Input type="text" 
                            disabled = {!isStudent}
                            name = "studentAddress"
                            defaultValue = {joiningReport.studentAddress}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Telephone No.</label>
                            <Input type="tel" 
                            disabled = {!isStudent}
                            name = "studentPhone"
                            defaultValue = {joiningReport.studentPhone}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>E-mail</label>
                            <Input type="email" 
                            disabled = {!isStudent}
                            name = "studentEmail"
                            defaultValue = {joiningReport.studentEmail}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            <br />

           { isStudent && <Row>
                <div className="update ml-auto mr-auto"><center>
                    <Button
                        className="btn-round"
                        color="primary"
                        onClick={submitHandler}
                    >
                        {"Save & Submit"}
                    </Button></center>
                </div>
            </Row> }
        </CardBody>

        <CardBody>
            <h5>Certificate By The Industry Coordinator</h5>
            <p>{"Certified that the above-mentioned student has joined our organization for the project semester in the industry."}</p>
            <Form>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Name</label>
                            <Input type="text" defaultValue={props.eval.facultyCoordinatorName} disabled />
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>Designation</label>
                            <Input type="text" 
                            disabled = {!isIndustryCoordinator}
                            name = "icDesignation"
                            defaultValue = {joiningReport.icDesignation}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Telephone No.</label>
                            <Input type="tel" 
                            disabled = {!isIndustryCoordinator}
                            name = "icPhone"
                            defaultValue = {joiningReport.icPhone}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>E-mail</label>
                            <Input type="email" 
                            disabled = {!isIndustryCoordinator}
                            name = "icEmail"
                            defaultValue = {joiningReport.icEmail}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            <br />

           { isIndustryCoordinator && <Row>
                <div className="update ml-auto mr-auto"><center>
                    <Button
                        className="btn-round"
                        color="primary"
                        onClick={submitHandler}
                    >
                        {"Save & Submit"}
                    </Button></center>
                </div>
            </Row>}

        </CardBody>
    </>
}

const mapStateToProps = (state) => {
    return {
        role: state.user.role,
    };
}

export default connect(mapStateToProps)(JoiningReport);