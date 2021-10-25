  import React, { useState } from "react";

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
    InputGroupAddon,
    InputGroupText,
    InputGroup
  } from "reactstrap";

  import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"

  const BasicInfoForm = (props) => {

    const [basicCred, setBasicCred] = useState({
            fName: null,
            lName: null,
            dob: null,
            gender: null,
            phone: null,
            linkedin: null,
            github: null,
          });

    const changeHandler = (e)=>{
      setBasicCred(prev=>{
        return {
          ...prev,
          [e.target.name] : e.target.value
        };
      })
    }


    return <div>
      <Card className="card-user">
        <CardHeader>
          <CardTitle tag="h5">Add Basic Info</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label>SID</label>
                  <Input
                    defaultValue={props.SID}
                    disabled
                    placeholder="SID"
                    type="text"
                  />
                </FormGroup>
              </Col>

              <Col className="pl-1" md="6">
                <FormGroup>
                  <label htmlFor="exampleInputEmail1">
                    Email address
                  </label>
                  <Input placeholder={props.email} type="email" disabled />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label>First Name</label>
                  <Input
                    placeholder="First Name"
                    type="text"
                    name = "fName"
                    onChange = {changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col className="pl-1" md="6">
                <FormGroup>
                  <label>Last Name</label>
                  <Input
                    placeholder="Last Name"
                    type="text"
                    name = "lName"
                    onChange = {changeHandler}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col className="pr-1" md="4">
                <FormGroup>
                  <label>Date Of Birth</label>
                  <Input
                    type="date"
                    name = "dob"
                    onChange = {changeHandler}
                  />
                </FormGroup>

              </Col>
              <Col className="px-1" md="4">
                <FormGroup>
                  <label>Gender</label>
                  <Input
                    type="select"
                    name = "gender"
                    onChange = {changeHandler}
                  >
                    <option>---Select---</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col className="pl-1" md="4">
                <FormGroup>
                  <label>Phone Number</label>
                  <Input
                    placeholder="Phone Number" 
                    type="text"
                    name = "phone"
                    onChange = {changeHandler}
                      />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <label>Link LinkedIn Account (Optional)</label>
                <InputGroup>
                  <Input 
                    name = "linkedin"
                    onChange = {changeHandler}
                    />
                  <InputGroupAddon addonType="append">
                    <InputGroupText><IoLogoLinkedin size="25" color="#51cbce" /></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>

              </Col>
            </Row>

            <Row>
              <Col md="12">
                <label>Link Github Account (Optional)</label>
                <InputGroup>
                  <Input 
                    name = "github"
                    onChange = {changeHandler}
                    />
                  <InputGroupAddon addonType="append">
                    <InputGroupText><IoLogoGithub size="25" color="#51cbce" /></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>

              </Col>
            </Row>

            <Row>
              <div className="update ml-auto mr-auto"><center>
                <Button
                  className="btn-round"
                  color="primary"
                  onClick={()=>{props.saveFunc(basicCred)}}
                >
                  {"Save & Continue"}
                </Button></center>
              </div>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  }

  export default BasicInfoForm;