import React from "react";
import { CardBody, FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button,
    Table, Label } from "reactstrap";

const IndustryFeedbackForm = (props) => {

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
                        <label>Date Of Joining (Internship)</label>
                        <Input type = "date"/>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>Date of Completion (Internship)</label>
                        <Input type="date"/>
                    </FormGroup>
                </Col>
            </Row>
            <br/><br/>
            <h6>Evaluator's Information</h6>

            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Name</label>
                        <Input type = "text"/>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>Designation</label>
                        <Input type="text"/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Company’s/ Organization’s Name"}</label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Company Address"}</label>
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Phone</label>
                        <Input type = "tel"/>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>Mobile Number</label>
                        <Input type="tel"/>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Email ID</label>
                        <Input type = "email"/>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>Fax Number</label>
                        <Input type="text" />
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
                            <td scope="row">{index + 1}</td>
                            <td>
                               {p} 
                            </td>
                            <td>
                               <Row>
                                   <Col xs="2"><Input type="radio" name={p}/></Col>
                                   <Col xs="2"><Input type="radio" name={p}/></Col>
                                   <Col xs="2"><Input type="radio" name={p}/></Col>
                                   <Col xs="2"><Input type="radio" name={p}/></Col>
                                   <Col xs="2"><Input type="radio" name={p}/></Col>
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
                    name="radio1"
                    type="radio"
                />
            </FormGroup>
            </Col>
                <Col lg="4" md="4">
            <FormGroup check>
            <Label style={{color : "red"}}>
                    No
                </Label>
                <Input
                    name="radio1"
                    type="radio"
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
                    name="radio1"
                    type="radio"
                />
            </FormGroup>
            </Col>
                <Col lg="4" md="4">
            <FormGroup check>
            <Label style={{color : "red"}}>
                    No
                </Label>
                <Input
                    name="radio1"
                    type="radio"
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
                    name="radio1"
                    type="radio"
                />
            </FormGroup>
            </Col>
                <Col lg="4" md="4">
            <FormGroup check>
            <Label style={{color : "red"}}>
                    No
                </Label>
                <Input
                    name="radio1"
                    type="radio"
                />
            </FormGroup>
            </Col>
            </Row>
            </CardBody>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Please specify Did you offer your intern any further employment? If yes, Package & Joining Details"}</label>
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Any other suggestions/feedback:"}</label>
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

export default IndustryFeedbackForm;
