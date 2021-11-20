import React from "react";
import {
    CardBody, FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button,
    Label,
    Table
} from "reactstrap";

const FacultySecondVisitReport = (props) => {
    return <CardBody>
        <h5>Faculty Coordinator's Second Visit Report</h5>


        <Form>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Date Of Visit"}</label>
                        <Input type="date" />
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

            <br /><br />
            <h6>Organization Details</h6>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Name & Address of the Organization"}</label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Telephone No.</label>
                        <Input type="tel" />
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>E-mail</label>
                        <Input type="email" />
                    </FormGroup>
                </Col>
            </Row>

            <br /><br />
            <h6>Project Site Details</h6>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Address of the Site"}</label>
                        <Input type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Telephone No.</label>
                        <Input type="tel" />
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>E-mail</label>
                        <Input type="email" />
                    </FormGroup>
                </Col>
            </Row>

            <br /><br />
            <h6>Brief Progress Report</h6>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Title of the Project / Problem Statement"}</label>
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>

            <Table striped responsive>
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
                                <Input type="text"/>
                            </td>
                            <td>
                                <Input type="text"/>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Assistance Required from the Institute"}</label>
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Response From The Industry Coordinator"}</label>
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Remarks of Industry Coordinator"}</label>
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Any significant change with respect to the First Visit Report"}</label>
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>{"Any Other Item : "}</label>
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>

            <br/>
            <Row>
                <Col lg="4" md="4">
                    <FormGroup>
                        <label>{"Over all Progress"}</label>
                    </FormGroup>
                </Col>
                <Col lg="4" md="4">
            <FormGroup check>
            <Label style={{color : "green"}}>
                    Satisfactory
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
                    Not Satisfactory
                </Label>
                <Input
                    name="radio1"
                    type="radio"
                />
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

        </Form>

    </CardBody>
}

export default FacultySecondVisitReport;