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
    InputGroupAddon,
    InputGroupText,
    InputGroup
  } from "reactstrap";

import {IoLogoLinkedin , IoLogoGithub} from "react-icons/io5"

const BasicInfoForm = (props)=>{
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
                          defaultValue="19103007"
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
                        <Input placeholder="Email" type="email" disabled />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue=""
                          placeholder="First Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue=""
                          placeholder="Last Name"
                          type="text"
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
                        />
                      </FormGroup>
                      
                    </Col>
                    <Col className="px-1" md="4">
                    <FormGroup>
                        <label>Gender</label>
                        <Input
                          defaultValue=""
                          placeholder="City"
                          type="select"
                        >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input placeholder="Phone Number" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                  <Col md="12">
                  <label>Link LinkedIn Account (Optional)</label>
                  <InputGroup>

                        <Input />
                        <InputGroupAddon addonType="append">
                        <InputGroupText><IoLogoLinkedin size="25" color="#51cbce"/></InputGroupText>
                        </InputGroupAddon>
                        </InputGroup>
               
                      </Col>
                      </Row>
                      
                      <Row>
                  <Col md="12">
                  <label>Link Github Account (Optional)</label>
                  <InputGroup>

                        <Input />
                        <InputGroupAddon addonType="append">
                        <InputGroupText><IoLogoGithub size="25" color="#51cbce"/></InputGroupText>
                        </InputGroupAddon>
                        </InputGroup>
               
                      </Col>
                      </Row>

                  <Row> 
                    <div className="update ml-auto mr-auto"><center>
                      <Button
                        className="btn-round"
                        color="primary"
                        onClick = {props.saveFunc}
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