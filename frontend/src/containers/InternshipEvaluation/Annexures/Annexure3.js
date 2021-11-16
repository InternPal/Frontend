import React from "react";
import {
    CardBody, FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button
} from "reactstrap";

const FacultyFirstVisitReport = (props)=>{
    return <CardBody>
        <h5>Faculty Coordinator's First Visit Report</h5>
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
            <h6>Industry Coordinator Details</h6>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Name</label>
                            <Input type="text" defaultValue={"XYZ"} disabled />
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>Designation</label>
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


            <br/><br/>
        <h6>Brief Progress Report</h6>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Stipend (if any): </label>
                            <Input type="number" />
                        </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>Accommodation/Meals (if any):</label>
                            <Input type="email" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Title of the Project / Problem Statement"}</label>
                            <Input type= "textarea" />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Type of Project"}</label>
                            <Input type="text" />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Expected Deliverables from Project Semester Assignment"}</label>
                            <Input type="textarea" />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Assistance required from the Institute"}</label>
                            <Input type="textarea" />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Response from the Industry/Remarks of Industry Coordinator"}</label>
                            <Input type="textarea" />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>{"Remarks of the Faculty Coordinator"}</label>
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

export default FacultyFirstVisitReport;