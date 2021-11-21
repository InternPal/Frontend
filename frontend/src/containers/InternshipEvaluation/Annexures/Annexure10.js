import React, {useState} from "react";
import axios from "../../../axios";
import { connect } from "react-redux";

import {
    CardBody, FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button,
    Table, Label
} from "reactstrap";

const StudentFeedbackForm = (props) => {

    const isStudent = props.role === "Student";

    const [studentFeedbackForm, setStudentFeedbackForm] = useState({
        ...props.eval.studentFeedbackForm
    });

    const changeHandler = (e) => {
        setStudentFeedbackForm((prev)=>{
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
                key: "studentFeedbackForm",
                value: studentFeedbackForm
            }).then((_) => {
                alert("Changes Saved Successfully");
            }).catch((err) => {
                alert(err);
            })
        }
    }


    const ProblemsFaced = ["Project identification", "Problem analysis", "Implementation of the Project", "Acceptance in Industry", "Recognition of the work done by you"];

    const skills = [
        "Communications Skills", "Confidence level", "Creativity",
        "Planning skills", "Adaptability", "Being methodical",
        "Organizational skills", "Knowledge", "Skill at work"
    ];

    const benefits = [
        "Stipend", "Accomodation", "Conveyance"
    ];



    return <CardBody>
        <h5>Student Feedback Form</h5>
        <Form>
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
                <Col md="12">
                    <FormGroup>
                        <label>{"Name and Place of the Industry"}</label>
                        <Input type="textarea" 
                        disabled = {!isStudent}
                        name = "industryAddress"
                        defaultValue = {studentFeedbackForm.industryAddress}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <h6>Are you satisfied with the manner the department did your:</h6>
            <Row>
                <Col lg="4" md="4">
                    <FormGroup>
                        <label>{"(i) Placement in various industrial units"}</label>
                    </FormGroup>
                </Col>
                <Col lg="4" md="4">
                    <FormGroup check>
                        <Label style={{ color: "green" }}>
                            Satisfied
                        </Label>
                        <Input
                            name="placementSatisfaction"
                            type="radio"
                            value = "true"
                            onChange = {changeHandler}
                            checked = {studentFeedbackForm.placementSatisfaction === "true"}
                            disabled = {!isStudent}
                        />
                    </FormGroup>
                </Col>
                <Col lg="4" md="4">
                    <FormGroup check>
                        <Label style={{ color: "red" }}>
                            Unsatisfied
                        </Label>
                        <Input
                            name="placementSatisfaction"
                            type="radio"
                            value = "false"
                            onChange = {changeHandler}
                            checked = {studentFeedbackForm.placementSatisfaction === "false"}
                            disabled = {!isStudent}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col lg="4" md="4">
                    <FormGroup>
                        <label>{"(ii) Registration & Orientation"}</label>
                    </FormGroup>
                </Col>
                <Col lg="4" md="4">
                    <FormGroup check>
                        <Label style={{ color: "green" }}>
                            Satisfied
                        </Label>
                        <Input
                            name="registrationSatisfaction"
                            type="radio"
                            value = "true"
                            onChange = {changeHandler}
                            checked = {studentFeedbackForm.registrationSatisfaction === "true"}
                            disabled = {!isStudent}
                        />
                    </FormGroup>
                </Col>
                <Col lg="4" md="4">
                    <FormGroup check>
                        <Label style={{ color: "red" }}>
                            Unsatisfied
                        </Label>
                        <Input
                            name="registrationSatisfaction"
                            type="radio"
                            value = "false"
                            onChange = {changeHandler}
                            checked = {studentFeedbackForm.registrationSatisfaction === "false"}
                            disabled = {!isStudent}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col lg="4" md="4">
                    <FormGroup>
                        <label>{"(iii) Evaluation"}</label>
                    </FormGroup>
                </Col>
                <Col lg="4" md="4">
                    <FormGroup check>
                        <Label style={{ color: "green" }}>
                            Satisfied
                        </Label>
                        <Input
                            name="evaluationSatisfaction"
                            type="radio"
                            value = "true"
                            onChange = {changeHandler}
                            checked = {studentFeedbackForm.evaluationSatisfaction === "true"}
                            disabled = {!isStudent}
                        /> </FormGroup> </Col>
                <Col lg="4" md="4">
                    <FormGroup check>
                        <Label style={{ color: "red" }}>
                            Unsatisfied
                        </Label>
                        <Input
                            name="evaluationSatisfaction"
                            type="radio"
                            value = "false"
                            onChange = {changeHandler}
                            checked = {studentFeedbackForm.evaluationSatisfaction === "false"}
                            disabled = {!isStudent}
                        /> </FormGroup> </Col>
            </Row>

            <br />
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Was the technical assistance/guidance received from the Institute satisfactory? If not, identify the areas where assistance was lacking?"}</label>
                        <Input type="textarea" 
                        disabled = {!isStudent}
                        name = "technicalAssistance"
                        defaultValue = {studentFeedbackForm.technicalAssistance}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Number of Projects</label>
                        <Input type="number" 
                        disabled = {!isStudent}
                        name = "numberOfProjects"
                        defaultValue = {studentFeedbackForm.numberOfProjects}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>
                            Area of Projects
                        </label>
                        <Input type="text" 
                        disabled = {!isStudent}
                        name = "areaOfProjects"
                        defaultValue = {studentFeedbackForm.areaOfProjects}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <br /><br />
            <h6>Problems faced in the Industry with regard to:</h6>
            <Table responsive>
                <tbody>
                    {ProblemsFaced.map((p, index) => {
                        return <tr key={index}>
                            <td width="10%">{index + 1}</td>
                            <td width="60%">{p}</td>
                            <td width="30%">
                                <Row>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>Yes</Label>
                                            <Input name={p} type="radio"
                                            value = "Yes"
                                            onChange = {changeHandler}
                                            checked = {studentFeedbackForm[p] === "Yes"}
                                            disabled = {!isStudent}/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>No</Label>
                                            <Input name={p} type="radio"
                                            value = "No"
                                            onChange = {changeHandler}
                                            checked = {studentFeedbackForm[p] === "No"}
                                            disabled = {!isStudent}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>

            <br /><br />
            <h6>Has the Project Semester proved to be an exercise that has enhanced your : </h6>
            <Table responsive>
                <tbody>
                    {skills.map((s, index) => {
                        return <tr key={index}>
                            <td width="10%">{index + 1}</td>
                            <td width="60%">{s}</td>
                            <td width="30%">
                                <Row>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>Yes</Label>
                                            <Input name={s} type="radio"
                                            value = "Yes"
                                            onChange = {changeHandler}
                                            checked = {studentFeedbackForm[s] === "Yes"}
                                            disabled = {!isStudent}/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>No</Label>
                                            <Input name={s} type="radio"
                                            value = "No"
                                            onChange = {changeHandler}
                                            checked = {studentFeedbackForm[s] === "No"}
                                            disabled = {!isStudent}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>

            <br /><br />
            <h6>Were you provided the following:</h6>
            <Table responsive>
                <tbody>
                    {benefits.map((b, index) => {
                        return <tr key={index}>
                            <td width="10%">{index + 1}</td>
                            <td width="60%">{b}</td>
                            <td width="30%">
                                <Row>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>Yes</Label>
                                            <Input name={b} type="radio"
                                            value = "Yes"
                                            onChange = {changeHandler}
                                            checked = {studentFeedbackForm[b] === "Yes"}
                                            disabled = {!isStudent}/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>No</Label>
                                            <Input name={b} type="radio"
                                            value = "No"
                                            onChange = {changeHandler}
                                            checked = {studentFeedbackForm[b] === "No"}
                                            disabled = {!isStudent}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>

            <br/><br/>
            <Table responsive>
                <tbody>
                    <tr>
                            <td width="70%">{"Would you work for this company again ?"}</td>
                            <td width="30%">
                                <Row>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>Yes</Label>
                                            <Input name={"W"} type="radio"
                                            value = "Yes"
                                            onChange = {changeHandler}
                                            checked = {studentFeedbackForm["W"] === "Yes"}
                                            disabled = {!isStudent}/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>No</Label>
                                            <Input name={"W"} type="radio"
                                            value = "No"
                                            onChange = {changeHandler}
                                            checked = {studentFeedbackForm["W"] === "No"}
                                            disabled = {!isStudent}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td width="70%">{"Would you recommend this organization to other students ?"}</td>
                            <td width="30%">
                                <Row>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>Yes</Label>
                                            <Input name={"W2"} type="radio"
                                            value = "Yes"
                                            onChange = {changeHandler}
                                            checked = {studentFeedbackForm["W2"] === "Yes"}
                                            disabled = {!isStudent}/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>No</Label>
                                            <Input name={"W2"} type="radio"
                                            value = "No"
                                            onChange = {changeHandler}
                                            checked = {studentFeedbackForm["W2"] === "No"}
                                            disabled = {!isStudent}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                </tbody>
            </Table>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Why or why not"}</label>
                        <Input type="textarea" disabled = {!isStudent}
                        name = "workAgain"
                        defaultValue = {studentFeedbackForm.workAgain}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Any additional information/suggestion for further improvement of the project:"}</label>
                        <Input type="textarea" 
                        disabled = {!isStudent}
                        name = "additional"
                        defaultValue = {studentFeedbackForm.additional}
                        onChange = {changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>





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


        </Form>
    </CardBody>
}


const mapStateToProps = (state) => {
    return {
        role: state.user.role,
    };
}

export default connect(mapStateToProps)(StudentFeedbackForm);