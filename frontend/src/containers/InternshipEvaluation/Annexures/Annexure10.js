import React from "react";
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
                <Col md="12">
                    <FormGroup>
                        <label>{"Name and Place of the Industry"}</label>
                        <Input type="textarea" />
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
                            name="radio1"
                            type="radio"
                        />
                    </FormGroup>
                </Col>
                <Col lg="4" md="4">
                    <FormGroup check>
                        <Label style={{ color: "red" }}>
                            Unsatisfied
                        </Label>
                        <Input
                            name="radio1"
                            type="radio"
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
                            name="radio1"
                            type="radio"
                        />
                    </FormGroup>
                </Col>
                <Col lg="4" md="4">
                    <FormGroup check>
                        <Label style={{ color: "red" }}>
                            Unsatisfied
                        </Label>
                        <Input
                            name="radio1"
                            type="radio"
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
                            name="radio1"
                            type="radio"
                        /> </FormGroup> </Col>
                <Col lg="4" md="4">
                    <FormGroup check>
                        <Label style={{ color: "red" }}>
                            Unsatisfied
                        </Label>
                        <Input
                            name="radio1"
                            type="radio"
                        /> </FormGroup> </Col>
            </Row>

            <br />
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Was the technical assistance/guidance received from the Institute satisfactory? If not, identify the areas where assistance was lacking?"}</label>
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Number of Projects</label>
                        <Input type="number" />
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>
                            Area of Projects
                        </label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>

            <br /><br />
            <h6>What additional subjects did you study in order to successfully complete the projects in the Industry?</h6>

            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><Input type="text" /></td>
                        <td><Input type="text" /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><Input type="text" /></td>
                        <td><Input type="text" /></td>
                    </tr>
                </tbody>
            </Table>

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
                                            <Input name={p} type="radio"/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>No</Label>
                                            <Input name={p} type="radio"/>
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
                                            <Input name={s} type="radio"/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>No</Label>
                                            <Input name={s} type="radio"/>
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
                                            <Input name={b} type="radio"/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>No</Label>
                                            <Input name={b} type="radio"/>
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
                                            <Input name={"W"} type="radio"/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>No</Label>
                                            <Input name={"W"} type="radio"/>
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
                                            <Input name={"W2"} type="radio"/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <FormGroup check>
                                            <Label>No</Label>
                                            <Input name={"W2"} type="radio"/>
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
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Any additional information/suggestion for further improvement of the project:"}</label>
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>





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


        </Form>
    </CardBody>
}

export default StudentFeedbackForm;