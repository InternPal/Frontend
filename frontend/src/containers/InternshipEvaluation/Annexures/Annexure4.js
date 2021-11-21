import React, { useState } from "react";
import axios from "../../../axios";
import { connect } from "react-redux";

import {
    CardBody, FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button,
    Label,
    // Table
} from "reactstrap";

const FacultySecondVisitReport = (props) => {

    const isFacultyCoordinator = props.role === "Faculty Coordinator";
    const isIndustryCoordinator = props.role === "Industry Coordinator";

    const [secondVisitReport, setSecondVisitReport] = useState({
        ...props.eval.secondVisitReport
    });

    const changeHandler = (e) => {
        setSecondVisitReport((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        })
    }

    const submitHandler = () => {
        const confirm = window.confirm("Confirm Changes ? ");
        if (confirm) {
            axios.post("/eval/specials", {
                id: props.eval._id,
                key: "secondVisitReport",
                value: secondVisitReport
            }).then((_) => {
                alert("Changes Saved Successfully");
            }).catch((err) => {
                alert(err);
            })
        }
    }



    return <CardBody>
        <h5>Faculty Coordinator's Second Visit Report</h5>
        <Form>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Date Of Visit"}</label>
                        <Input type="date" 
                        disabled = {!isFacultyCoordinator}
                        name = "dateOfVisit"
                        defaultValue = {secondVisitReport.dateOfVisit}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>SID</label>
                        <Input
                            defaultValue={props.eval.SID}
                            disabled
                        />
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>
                            Name
                        </label>
                        <Input defaultValue = {props.eval.studentName} disabled />
                    </FormGroup>
                </Col>
            </Row>

            <br /><br />
            <h6>Organization Details</h6>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Name & Address of the Organization"}</label>
                        <Input type="text" 
                        disabled = {!isFacultyCoordinator}
                        name = "organisationAddress"
                        defaultValue = {secondVisitReport.organisationAddress}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Telephone No.</label>
                        <Input type="tel" 
                        disabled = {!isFacultyCoordinator}
                        name = "organisationPhone"
                        defaultValue = {secondVisitReport.organisationPhone}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>E-mail</label>
                        <Input type="email"
                        disabled = {!isFacultyCoordinator}
                        name = "organisationEmail"
                        defaultValue = {secondVisitReport.organisationEmail}
                        onChange = {changeHandler} />
                    </FormGroup>
                </Col>
            </Row>

            <br /><br />
            <h6>Project Site Details</h6>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Address of the Site"}</label>
                        <Input type="text" 
                        disabled = {!isFacultyCoordinator}
                        name = "siteAddress"
                        defaultValue = {secondVisitReport.siteAddress}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Telephone No.</label>
                        <Input type="tel" 
                        disabled = {!isFacultyCoordinator}
                        name = "sitePhone"
                        defaultValue = {secondVisitReport.sitePhone}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>E-mail</label>
                        <Input type="email" 
                        disabled = {!isFacultyCoordinator}
                        name = "siteEmail"
                        defaultValue = {secondVisitReport.siteEmail}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <br /><br />
            <h6>Brief Progress Report</h6>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Title of the Project / Problem Statement"}</label>
                        <Input type="textarea" 
                         disabled = {!isFacultyCoordinator}
                         name = "projectTitle"
                         defaultValue = {secondVisitReport.projectTitle}
                         onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            {/* <Table striped responsive>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Details of Project Semester Assignments</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 6 }, (_, i) => i).map(a => {
                        return <tr key={a}>
                            <th scope="row">{a + 1}</th>
                            <td>
                                <Input type="text" />
                            </td>
                            <td>
                                <Input type="text" />
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table> */}

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Assistance Required from the Institute"}</label>
                        <Input type="textarea"
                        disabled = {!isFacultyCoordinator}
                        name = "assistance"
                        defaultValue = {secondVisitReport.assistance}
                        onChange = {changeHandler}  />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Response From The Industry Coordinator"}</label>
                        <Input type="textarea" 
                         disabled = {!isIndustryCoordinator}
                         name = "icResponse"
                         defaultValue = {secondVisitReport.icResponse}
                         onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Remarks of Industry Coordinator"}</label>
                        <Input type="textarea" 
                        disabled = {!isIndustryCoordinator}
                        name = "icRemarks"
                        defaultValue = {secondVisitReport.icRemarks}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Any significant change with respect to the First Visit Report"}</label>
                        <Input type="textarea" 
                        disabled = {!isFacultyCoordinator}
                        name = "significantChanges"
                        defaultValue = {secondVisitReport.significantChanges}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Any Other Item : "}</label>
                        <Input type="textarea" 
                        disabled = {!isFacultyCoordinator}
                        name = "other"
                        defaultValue = {secondVisitReport.other}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <br />
            <Row>
                <Col lg="4" md="4">
                    <FormGroup>
                        <label>{"Over all Progress"}</label>
                    </FormGroup>
                </Col>
                <Col lg="4" md="4">
                    <FormGroup check>
                        <Label style={{ color: "green" }}>
                            Satisfactory
                        </Label>
                        <Input
                            name="overAllProgress"
                            type="radio"
                            value = "true"
                            onChange = {changeHandler}
                            checked = {secondVisitReport.overAllProgress === "true"}
                            disabled = {!isFacultyCoordinator}
                        />
                    </FormGroup>
                </Col>
                <Col lg="4" md="4">
                    <FormGroup check>
                        <Label style={{ color: "red" }}>
                            Not Satisfactory
                        </Label>
                        <Input
                            name="overAllProgress"
                            type="radio"
                            value = "false"
                            onChange = {changeHandler}
                            checked = {secondVisitReport.overAllProgress === "false"}
                            disabled = {!isFacultyCoordinator}
                        />
                    </FormGroup>
                </Col>
            </Row>


            <br />

            {(isFacultyCoordinator || isIndustryCoordinator) && <Row>
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

        </Form>

    </CardBody>
}

const mapStateToProps = (state) => {
    return {
        role: state.user.role,
    };
}

export default connect(mapStateToProps)(FacultySecondVisitReport);