import React, {useState} from "react";
import axios from "../../../axios";
import { connect } from "react-redux";

import { CardBody,FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button,
    Table, } from "reactstrap";

const IndustryCoordinatorEvaluationForm = (props)=>{

    const isIndustryCoordinator = props.role === "Industry Coordinator";

    const [industryEvaluationForm , setIndustryEvaluationForm] = useState({
        ...props.eval.industryEvaluationForm
    })

    const changeHandler = (e) => {
        setIndustryEvaluationForm((prev)=>{
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
                key: "industryEvaluationForm",
                value: industryEvaluationForm
            }).then((_) => {
                alert("Changes Saved Successfully");
            }).catch((err) => {
                alert(err);
            })
        }
    }




    const Grades = ["---Select---","A+", "A", "B+", "B", "C+", "C", "D", "F"];
    const Performance = [
        null, "Outstanding", "Excellent",
        "Very Good", "Good", "Average", 
        "Below Average", "Poor", "Fail"
    ];

    return <CardBody>
        <h5>Industry Evaluation Form</h5>
        <Form>
        <Row>
            <Col md="12">
                <FormGroup>
                    <label>{"Name of the Organisation"}</label>
                    <Input type="text" 
                    disabled = {!isIndustryCoordinator}
                    name = "organisationName"
                    defaultValue = {industryEvaluationForm.organisationName}
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

            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Mid Term Grade</label>
                        <Input type="select"
                        disabled = {!isIndustryCoordinator}
                        name = "midTermGrade"
                        defaultValue = {industryEvaluationForm.midTermGrade}
                        onChange = {changeHandler}>
                            {Grades.map((g)=>{
                                return <option key={g}>{g}</option>
                            })}
                        </Input>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>
                            Final Evaluation Grade
                        </label>
                        <Input type="select"
                        disabled = {!isIndustryCoordinator}
                        name = "finalGrade"
                        defaultValue = {industryEvaluationForm.finalGrade}
                        onChange = {changeHandler}>
                            {Grades.map((g)=>{
                                return <option key={g}>{g}</option>
                            })}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <br/>
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

        <br/><br/>
        <center>
            <Table responsive striped style={{
                width : "40%"
            }}>
                <thead>
                    <tr>
                        <th>Letter Grade</th>
                        <th>Performance</th>
                    </tr>
                </thead>
                <tbody>
                    {Grades.map((g, i)=>{
                        if(i===0)return null;
                        return <tr key={i}>
                            <td>{g}</td>
                            <td>{Performance[i]}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </center>
        </Form>
    </CardBody>
}

const mapStateToProps = (state) => {
    return {
        role: state.user.role,
    };
}


export default connect(mapStateToProps)(IndustryCoordinatorEvaluationForm);