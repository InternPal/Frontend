import React from "react";
import { CardBody,FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button,
    Table, } from "reactstrap";

const IndustryCoordinatorEvaluationForm = (props)=>{

    const Grades = ["---Select---","A+", "A", "B+", "B", "C+", "C", "D", "F"];
    const Performance = [
        null, "Outstanding", "Excellent",
        "Very Good", "Good", "Average", 
        "Below Average", "Poor", "Fail"
    ];

    return <CardBody>
        <Form>
            
        <Row>
            <Col md="12">
                <FormGroup>
                    <label>{"Name of the Organisation"}</label>
                    <Input type="text" />
                </FormGroup>
            </Col>
        </Row>

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
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Mid Term Grade</label>
                        <Input type="select">
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
                        <Input type="select">
                            {Grades.map((g)=>{
                                return <option key={g}>{g}</option>
                            })}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <br/>
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

export default IndustryCoordinatorEvaluationForm;