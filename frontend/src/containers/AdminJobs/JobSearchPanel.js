import React from "react";
import {
    Card, CardHeader, CardBody, CardTitle, Table, Form, Row, Col, FormGroup, Input, Button
} from "reactstrap";


const JobSearchPanel = (props)=>{
    return <Card className="card-user">
    <CardHeader>
        <CardTitle tag="h5">Search Jobs</CardTitle>
    </CardHeader>
    <CardBody>
        <Form>
            <Row>
                <Col className="pr-1" md="6">
                    <FormGroup>
                        <label>Select Type</label>
                        <Input
                            type="select"
                        >
                            <option>{"---Select---"}</option>
                            <option>{"Internship"}</option>
                            <option>{"Full Time"}</option>
                        </Input>
                    </FormGroup>
                </Col>

                <Col className="pl-1" md="6">
                    <FormGroup>
                        <label>Select Year</label>
                        <Input
                            type="select"
                        >
                            <option>{"---Select---"}</option>
                            <option>{2021}</option>
                            <option>{2020}</option>
                            <option>{2019}</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>

            
        </Form>

        <Row>
                <div className="update ml-auto mr-auto">
                    <Button
                        className="btn-round"
                        color="primary"
                        onClick = {props.searchFunc}
                    >
                        {"Search Jobs"}
                    </Button>
                </div>
            </Row>
    </CardBody>
</Card>;
}

export default JobSearchPanel;
