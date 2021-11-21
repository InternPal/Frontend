import React, {useState} from "react";
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

const FacultyFirstVisitReport = (props)=>{

    const isFacultyCoordinator = props.role === "Faculty Coordinator";
    const isIndustryCoordinator = props.role === "Industry Coordinator";

    const [firstVisitReport, setFirstVisitReport] = useState({
        ...props.eval.firstVisitReport
    });

    const changeHandler = (e) => {
        setFirstVisitReport((prev)=>{
            return {
                ...prev,
                [e.target.name] : e.target.value
            };
        })
    }

    const submitHandler = () => {
        const confirm = window.confirm("Confirm Changes ? ");
        if (confirm) {
            axios.post("/eval/specials", {
                id: props.eval._id,
                key: "firstVisitReport",
                value: firstVisitReport
            }).then((_) => {
                alert("Changes Saved Successfully");
            }).catch((err) => {
                alert(err);
            })
        }
    }



    
    return <CardBody>
        <h5>Faculty Coordinator's First Visit Report</h5>
        <Form>

        <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Date Of Visit"}</label>
                            <Input type="date" 
                            disabled = {!isFacultyCoordinator}
                            name = "dateOfVisit"
                            defaultValue = {firstVisitReport.dateOfVisit}
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
                            name = "organizationAddress"
                            defaultValue = {firstVisitReport.organizationAddress}
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
                            name = "organizationPhone"
                            defaultValue = {firstVisitReport.organizationPhone}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>E-mail</label>
                            <Input type="email" 
                            disabled = {!isFacultyCoordinator}
                            name = "organizationEmail"
                            defaultValue = {firstVisitReport.organizationEmail}
                            onChange = {changeHandler}/>
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
                            defaultValue = {firstVisitReport.siteAddress}
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
                            defaultValue = {firstVisitReport.sitePhone}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>E-mail</label>
                            <Input type="email"
                            disabled = {!isFacultyCoordinator}
                            name = "siteEmail"
                            defaultValue = {firstVisitReport.siteEmail}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>

                <br /><br />
            <h6>Industry Coordinator Details</h6>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Name</label>
                            <Input defaultValue={props.eval.industryCoordinatorName} disabled />
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>Designation</label>
                            <Input type="text" 
                            disabled = {!isIndustryCoordinator}
                            name = "icDesignation"
                            defaultValue = {firstVisitReport.icDesignation}
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
                            defaultValue = {firstVisitReport.icPhone}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>E-mail</label>
                            <Input type="email" 
                            disabled = {!isIndustryCoordinator}
                            name = "icEmail"
                            defaultValue = {firstVisitReport.icEmail}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>


            <br/><br/>
        <h6>Brief Progress Report</h6>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Stipend (if any): </label>
                            <Input type="number" 
                            disabled = {!isFacultyCoordinator}
                            name = "stipend"
                            defaultValue = {firstVisitReport.stipend}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>Accommodation/Meals (if any):</label>
                            <Input type="text" 
                            disabled = {!isFacultyCoordinator}
                            name = "accommodation"
                            defaultValue = {firstVisitReport.accommodation}
                            onChange = {changeHandler} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Title of the Project / Problem Statement"}</label>
                            <Input type= "textarea" 
                            disabled = {!isFacultyCoordinator}
                            name = "projectTitle"
                            defaultValue = {firstVisitReport.projectTitle}
                            onChange = {changeHandler} />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Type of Project"}</label>
                            <Input type="text" 
                            disabled = {!isFacultyCoordinator}
                            name = "projectType"
                            defaultValue = {firstVisitReport.projectType}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Expected Deliverables from Project Semester Assignment"}</label>
                            <Input type="textarea" 
                            disabled = {!isFacultyCoordinator}
                            name = "projectExpectedDeliverables"
                            defaultValue = {firstVisitReport.projectExpectedDeliverables}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Assistance required from the Institute"}</label>
                            <Input type="textarea" 
                            disabled = {!isFacultyCoordinator}
                            name = "instituteAssistance"
                            defaultValue = {firstVisitReport.instituteAssistance}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Response from the Industry/Remarks of Industry Coordinator"}</label>
                            <Input type="textarea"
                            disabled = {!isIndustryCoordinator}
                            name = "icRemarks"
                            defaultValue = {firstVisitReport.icRemarks}
                            onChange = {changeHandler} 
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Remarks of the Faculty Coordinator"}</label>
                            <Input type="textarea" 
                            disabled = {!isFacultyCoordinator}
                            name = "fcRemarks"
                            defaultValue = {firstVisitReport.fcRemarks}
                            onChange = {changeHandler}/>
                        </FormGroup>
                    </Col>
                </Row>

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

export default connect(mapStateToProps)(FacultyFirstVisitReport);