import React from "react";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Table
} from "reactstrap";



const AcademicDetailsForm = () => {

    const Branches = ["---Select---", "Aerospace Engineering",
        "Civil Engineering",
        "Computer Science & Engineering",
        "Electrical Engineering",
        "Electronics and Communication Engineering",
        "Mechanical Engineering",
        "Metallurgical & Materials Engineering",
        "Production and Industrial Engineering"];

    const semesters = Array.from({ length: 9 }, (_, i) => i);

    return <div>
        <Card className="card-user">
            <CardHeader>
                <CardTitle tag="h5">Add Academic Details</CardTitle>
            </CardHeader>
            <CardBody>
                <Form>

                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label>Branch</label>
                                <Input
                                    type="select"
                                >
                                    {Branches.map((Branch) => {
                                        return <option>{Branch}</option>;
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Semester</label>
                                <Input
                                    type="select"
                                >
                                    {semesters.map((s) => {
                                        return <option>{s}</option>;
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <br />

                    {/* Work Here */}
                    <label>Enter Details For Each Semester </label>

                    <Table striped>
                        <thead className="text-primary">
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>

                    <br/>

                    <label>Enter Backlog Details</label>

                    <Table striped>
                        <thead className="text-primary">
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>

                    <br/>

                    <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Percentage equivalent of 12th Marks</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Percentage equivalent of 10th Marks</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>



                    <Row>
                        <div className="update ml-auto mr-auto">
                            <Button
                                className="btn-round"
                                color="primary"
                                type="submit"
                            >
                                {"Save & Continue"}
                            </Button>
                        </div>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    </div>
}

export default AcademicDetailsForm;