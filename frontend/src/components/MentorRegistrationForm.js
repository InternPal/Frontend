import React, { useState } from "react";
import axios from "../axios";

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
} from "reactstrap";

const MentorRegistrationForm = () => {

    const [mentorCreds, setMentorCreds] = useState({
        email : null,
        name : null,
        password : null,
        studentList : []
    });

    const changeHandler = (e)=>{
        setMentorCreds(prev=>{
            return {
                ...prev,
                [e.target.name] : e.target.value
            };
        })
    }

    const registerMentor = ()=>{
        var confirm = window.confirm("Confirm Mentor Registration ? ");
        if(confirm){
            console.log(mentorCreds)
            axios.post("/mentors", mentorCreds)
            .then((_)=>{
                alert("Registration Successful");
            })
            .catch((err)=>{
                alert(err);
            })
        }
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle tag="h5">Mentor Registration</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Mentor Name</label>
                                    <Input
                                        name="name"
                                        placeholder="Mentor Name"
                                        type="text"
                                        onChange = {changeHandler}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Email</label>
                                    <Input type="email" name="email" placeholder="Email Address" onChange = {changeHandler} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Password</label>
                                    <Input type="password" name="password" placeholder="Password" onChange = {changeHandler}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label>Confirm Password</label>
                                    <Input type="password" name="confirmPassword" placeholder="Confirm password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>  <div className="update ml-auto mr-auto"><center>
                            <Button
                                className="btn-round"
                                color="primary"
                                onClick = {registerMentor}
                            >
                                {"Confirm"}
                            </Button></center>
                        </div>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default MentorRegistrationForm;