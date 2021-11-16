import React,  {useState} from "react";

import {connect} from "react-redux";
import * as UserActions from "../../store/Actions/UserActions";

import { CardBody, Form, Row, Col, FormGroup, Input, Button } from "reactstrap";

const Login = (props) => {
    const [loginCred, setLoginCred] = useState({
        role : null,
        email : null,
        password : null
    });

    const changeHandler = (e)=>{
        setLoginCred((prev)=>{
            return{
                ...prev,
                [e.target.name] : e.target.value
            };
        })
    }

    const submitHandler = ()=>{
        props.loginInit(loginCred);
    }

    return <CardBody>
        <Form>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>
                            Select Role
                        </label>
                        <Input type="select" name="role" onChange={changeHandler}>
                            <option>{"---Select---"}</option>
                            <option>{"Admin"}</option>
                            <option>{"Faculty Coordinator"}</option>
                            <option>{"Industry Coordinator"}</option>
                            <option>{"Student"}</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>
                            Email address
                        </label>
                        <Input placeholder="Email" type="email" name="email" onChange={changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <label>Password</label>
                        <Input type="password" name="password" placeholder="Password" onChange={changeHandler}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <div className="update ml-auto mr-auto"><center>
                    <Button
                        className="btn-round"
                        color="primary"
                        onClick = {submitHandler}
                    >
                        {"Sign In"}
                    </Button></center>
                </div>
            </Row>
        </Form>
    </CardBody>
}

const mapDispatchToProps = (dispatch)=>{
    return {
        loginInit : (user)=>dispatch(UserActions.loginInit(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);