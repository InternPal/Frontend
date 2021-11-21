import React, {useState} from "react";
import axios from "../../../axios";
import { connect } from "react-redux";

import { CardBody, FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button,
    Table, Label } from "reactstrap";

const IndustryFeedbackForm = (props) => {

    const isIndustryCoordinator = props.role === "Industry Coordinator";

    const [industryFeedbackForm , setIndustryFeedbackForm] = useState({
        ...props.eval.industryFeedbackForm
    });

    const changeHandler = (e) => {
        setIndustryFeedbackForm((prev)=>{
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
                key: "industryFeedbackForm",
                value: industryFeedbackForm
            }).then((_) => {
                alert("Changes Saved Successfully");
            }).catch((err) => {
                alert(err);
            })
        }
    }

    const Parameters = [
        "Intellegence/Learning Aptitude", "Professional Skill/Knowledge", "Work Output/Performance",
        "Expression", "Initiative & Drive", "Punctuality/Regularity",
        "Honesty/Integrity", "Co-operation & Tact", "Discipline",
        "Interpersonal Skills", "Dedication towards work", "Overall performance"
    ];

        return <CardBody>
         <h5>Industry Feedback Form</h5>
         <Form>
        <h6>Internee's Information</h6>
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

            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Date Of Joining (Internship)</label>
                        <Input type = "date" 
                        disabled = {!isIndustryCoordinator}
                        name = "dateOfJoining"
                        defaultValue = {industryFeedbackForm.dateOfJoining}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>Date of Completion (Internship)</label>
                        <Input type="date"
                        disabled = {!isIndustryCoordinator}
                        name = "dateOfCompletion"
                        defaultValue = {industryFeedbackForm.dateOfCompletion}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>
            <br/><br/>
            <h6>Evaluator's Information</h6>

            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Name</label>
                        <Input disabled defaultValue = {props.eval.industryCoordinatorName}/>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>Designation</label>
                        <Input type="text"
                        disabled = {!isIndustryCoordinator}
                        name = "icDesignation"
                        defaultValue = {industryFeedbackForm.icDesignation}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Company’s/ Organization’s Name"}</label>
                        <Input type="text"
                        disabled = {!isIndustryCoordinator}
                        name = "organizationName"
                        defaultValue = {industryFeedbackForm.organizationName}
                        onChange = {changeHandler} />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Company Address"}</label>
                        <Input type="textarea" 
                        disabled = {!isIndustryCoordinator}
                        name = "organizationAddress"
                        defaultValue = {industryFeedbackForm.organizationAddress}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Phone</label>
                        <Input type = "tel"
                        disabled = {!isIndustryCoordinator}
                        name = "icPhone"
                        defaultValue = {industryFeedbackForm.icPhone}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>Mobile Number</label>
                        <Input type="tel" 
                        disabled = {!isIndustryCoordinator}
                        name = "icMobile"
                        defaultValue = {industryFeedbackForm.icMobile}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Email ID</label>
                        <Input type = "email"
                        disabled = {!isIndustryCoordinator}
                        name = "icEmail"
                        defaultValue = {industryFeedbackForm.icEmail}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>Fax Number</label>
                        <Input type="text"
                        disabled = {!isIndustryCoordinator}
                        name = "icFax"
                        defaultValue = {industryFeedbackForm.icFax}
                        onChange = {changeHandler} />
                    </FormGroup>
                </Col>
            </Row>
            <br/><br/>
            <h6>Please tick mark in the relevant box in the following grade chart for the Internee</h6>
            <p>{"A+=Excellent, A=Very Good, B= Good, C=Satisfactory & D=Unsatisfactory"}</p>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Parameters</th>
                        <th>
                        <Row>
                                   <Col xs="2">A+</Col>
                                   <Col xs="2">A</Col>
                                   <Col xs="2">B</Col>
                                   <Col xs="2">C</Col>
                                   <Col xs="2">D</Col>
                        </Row>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Parameters.map((p, index) => {
                        return <tr key={p}>
                            <td>{index + 1}</td>
                            <td>
                               {p} 
                            </td>
                            <td>
                               <Row>
                                   <Col xs="2"><Input type="radio" name={p} value="A+" onChange={changeHandler} disabled={!isIndustryCoordinator} checked = {industryFeedbackForm[p] === "A+"}/></Col>
                                   <Col xs="2"><Input type="radio" name={p} value="A" onChange={changeHandler} disabled={!isIndustryCoordinator} checked = {industryFeedbackForm[p] === "A"}/></Col>
                                   <Col xs="2"><Input type="radio" name={p} value="B" onChange={changeHandler} disabled={!isIndustryCoordinator} checked = {industryFeedbackForm[p] === "B"}/></Col>
                                   <Col xs="2"><Input type="radio" name={p} value="C" onChange={changeHandler} disabled={!isIndustryCoordinator} checked = {industryFeedbackForm[p] === "C"}/></Col>
                                   <Col xs="2"><Input type="radio" name={p} value="D" onChange={changeHandler} disabled={!isIndustryCoordinator} checked = {industryFeedbackForm[p] === "D"}/></Col>
                               </Row>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Did the Intern meet your expectations?"}</label>
                    </FormGroup>
                </Col>
            </Row>
            <CardBody>
            <Row>
                <Col lg="4" md="4">
            <FormGroup check>
            <Label style={{color : "green"}}>
                    Yes
                </Label>
                <Input
                    name="internSatisfaction"
                    type="radio"
                    value = "true"
                    onChange = {changeHandler}
                    checked = {industryFeedbackForm.internSatisfaction === "true"}
                    disabled = {!isIndustryCoordinator}
                />
            </FormGroup>
            </Col>
                <Col lg="4" md="4">
            <FormGroup check>
            <Label style={{color : "red"}}>
                    No
                </Label>
                <Input
                    name="internSatisfaction"
                    type="radio"
                    value = "false"
                    onChange = {changeHandler}
                    checked = {industryFeedbackForm.internSatisfaction === "false"}
                    disabled = {!isIndustryCoordinator}
                />
            </FormGroup>
            </Col>
            </Row>
            </CardBody>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Would you like to take PEC students again in next year?"}</label>
                    </FormGroup>
                </Col>
            </Row>
            <CardBody>
            <Row>
                <Col lg="4" md="4">
            <FormGroup check>
            <Label style={{color : "green"}}>
                    Yes
                </Label>
                <Input
                    name="pecSatisfaction"
                    type="radio"
                    value = "true"
                    onChange = {changeHandler}
                    checked = {industryFeedbackForm.pecSatisfaction === "true"}
                    disabled = {!isIndustryCoordinator}
                />
            </FormGroup>
            </Col>
                <Col lg="4" md="4">
            <FormGroup check>
            <Label style={{color : "red"}}>
                    No
                </Label>
                <Input
                    name="pecSatisfaction"
                    type="radio"
                    value = "false"
                    onChange = {changeHandler}
                    checked = {industryFeedbackForm.pecSatisfaction === "false"}
                    disabled = {!isIndustryCoordinator}
                />
            </FormGroup>
            </Col>
            </Row>
            </CardBody>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Do you think that the Institute can interact with the industry/ organization in some other way also?"}</label>
                    </FormGroup>
                </Col>
            </Row>
            <CardBody>
            <Row>
                <Col lg="4" md="4">
            <FormGroup check>
            <Label style={{color : "green"}}>
                    Yes
                </Label>
                <Input
                    name="interact"
                    type="radio"
                    value = "Yes"
                    onChange = {changeHandler}
                    checked = {industryFeedbackForm.interact === "Yes"}
                    disabled = {!isIndustryCoordinator}
                />
            </FormGroup>
            </Col>
                <Col lg="4" md="4">
            <FormGroup check>
            <Label style={{color : "red"}}>
                    No
                </Label>
                <Input
                    name="interact"
                    type="radio"
                    value = "No"
                    onChange = {changeHandler}
                    checked = {industryFeedbackForm.interact === "No"}
                    disabled = {!isIndustryCoordinator}
                />
            </FormGroup>
            </Col>
            </Row>
            </CardBody>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Please specify Did you offer your intern any further employment? If yes, Package & Joining Details"}</label>
                        <Input type="textarea" 
                        disabled = {!isIndustryCoordinator}
                        name = "furtherEmployement"
                        defaultValue = {industryFeedbackForm.furtherEmployement}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Any other suggestions/feedback:"}</label>
                        <Input type="textarea" 
                        disabled = {!isIndustryCoordinator}
                        name = "suggestion"
                        defaultValue = {industryFeedbackForm.suggestion}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>



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
         </Form>
    </CardBody>
}

const mapStateToProps = (state) => {
    return {
        role: state.user.role,
    };
}




export default connect(mapStateToProps)(IndustryFeedbackForm);
