import React, {useState} from "react";
import {
    Card, CardHeader, CardBody, CardTitle,Form, Row, Col, FormGroup, Input, Button
} from "reactstrap";


const JobSearchPanel = (props)=>{

    const [searchCreds, setSearchCreds] = useState({
        year : null,
        jobType : null
    });

    const changeHandler = (e)=>{
        setSearchCreds(prev=>{
            return {
                ...prev,
                [e.target.name] : e.target.value
            };
        })
    }

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
                            name = "jobType"
                            onChange = {changeHandler}
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
                            type="number" min="2020" max="2099" step="1"
                            name = "year"
                            onChange = {changeHandler}
                        >
                        </Input>
                    </FormGroup>
                </Col>
            </Row>

            
        </Form>

        <Row>
                <div className="update ml-auto mr-auto"><center>
                    <Button
                        className="btn-round"
                        color="primary"
                        onClick = {()=>{props.searchFunc(searchCreds)}}
                    >
                        {"Search Jobs"}
                    </Button></center>
                </div>
            </Row>
    </CardBody>
</Card>;
}

export default JobSearchPanel;
