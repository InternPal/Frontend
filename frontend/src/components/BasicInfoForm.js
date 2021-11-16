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

import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { validationFunc } from "../formValidation";

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

  const changeHandler = (e) => {
    setBasicCred(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    })
    let flag = Boolean(validationFunc(e.target.name, e.target.value))
    setValidCRED((prev) => {
      return {
        ...prev,
        [e.target.name]: {
          valid: flag,
          invalid: !flag
        }
      }
    })
  }

  const validator = () => {
    let arr = Object.values(validCRED)
    return arr.reduce((flag, key) => {
      return (key.valid && flag)
    }, true);
  }

  const [validCRED, setValidCRED] = useState({
    "fName": { valid: false, invalid: false },
    "lName": { valid: false, invalid: false },
    "dob": { valid: false, invalid: false },
    "gender": { valid: false, invalid: false },
    "phone": { valid: false, invalid: false },
  })

  const genderList = ["---Select---", "Female", "Male", "Non-Binary", "Transgender", "Intersex", "I Prefer not to say"];


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
                  name="fName"
                  onChange={changeHandler}
                  valid={validCRED.fName.valid}
                  invalid={validCRED.fName.invalid}
                />
              </FormGroup>
            </Col>
            <Col className="pl-1" md="6">
              <FormGroup>
                <label>Last Name</label>
                <Input
                  placeholder="Last Name"
                  type="text"
                  name="lName"
                  onChange={changeHandler}
                  valid={validCRED.lName.valid}
                  invalid={validCRED.lName.invalid}
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
                  name="dob"
                  onChange={changeHandler}
                  valid={validCRED.dob.valid}
                  invalid={validCRED.dob.invalid}
                />
              </FormGroup>

            </Col>
            <Col className="px-1" md="4">
              <FormGroup>
                <label>Gender</label>
                <Input
                  type="select"
                  name="gender"
                  onChange={changeHandler}
                  valid={validCRED.gender.valid}
                  invalid={validCRED.gender.invalid}
                >
                  {genderList.map(g => <option key={g}>{g}</option>)}
                </Input>
              </FormGroup>
            </Col>
            <Col className="pl-1" md="4">
              <FormGroup>
                <label>Phone Number</label>
                <Input
                  placeholder="Phone Number"
                  type="text"
                  name="phone"
                  onChange={changeHandler}
                  valid={validCRED.phone.valid}
                  invalid={validCRED.phone.invalid}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <label>Link LinkedIn Account (Optional)</label>
              <InputGroup>
                <Input
                  name="linkedin"
                  onChange={changeHandler}
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
                  name="github"
                  onChange={changeHandler}
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
                disabled={!validator()}
                onClick={() => { props.saveFunc(basicCred) }}
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