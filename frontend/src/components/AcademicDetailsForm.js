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
    Table,
    Label
} from "reactstrap";

import { validationFunc } from "../formValidation";

const AcademicDetailsForm = (props) => {

    const [academicCred, setAcademicCred] = useState({
        branch : null,
        semester : null,
        class10 : null,
        class12 : null,
        cgList : null,
        backlogList : null 
    });

    const [validCRED, setValidCRED] = useState({
        "branch": { valid: false, invalid: false },
        "semester": { valid: false, invalid: false },
        "class10": { valid: false, invalid: false },
        "class12": { valid: false, invalid: false }
    })

    const changeHandler = (e)=>{
        setAcademicCred(prev=>{
            return {
                ...prev,
                [e.target.name] : e.target.value
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

    const Branches = ["---Select---", "Aerospace Engineering",
        "Civil Engineering",
        "Computer Science & Engineering",
        "Electrical Engineering",
        "Electronics and Communication Engineering",
        "Mechanical Engineering",
        "Metallurgical & Materials Engineering",
        "Production and Industrial Engineering"];

    const semesters = ["---Select---",5,7]

    const [sem, changeSem] = useState(0);
    const [backlogFlag, setBacklogFlag] = useState(false);

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
                                    name = "branch"
                                    onChange = {changeHandler}
                                    valid={validCRED.branch.valid}
                                    invalid={validCRED.branch.invalid}
                                >
                                    {Branches.map((Branch) => {
                                        return <option key={Branch}>{Branch}</option>;
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Semester</label>
                                <Input
                                    type="select"
                                    name = "semester"
                                    valid={validCRED.semester.valid}
                                    invalid={validCRED.semester.invalid}
                                    onChange={(event) => {
                                        changeSem(event.target.value)
                                        setAcademicCred(prev=>{
                                            return {
                                                ...prev,
                                                semester : event.target.value,
                                                cgList : Array.from({ length: +event.target.value - 1 }, (_, i) => i).map(_=> {return {cgpa : null, sgpa : null}})
                                            };
                                        })
                                        changeHandler(event)
                                    }}
                                >
                                    {semesters.map((s) => {
                                        return <option key={s}>{s}</option>;
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <br />


                    {sem > 0 && <>
                        <label>Enter Details For Each Semester </label>

                        <Table striped responsive>
                            <thead className="text-primary">
                                <tr>
                                    <th>Semester</th>
                                    <th className="text-right">SGPA</th>
                                    <th className="text-right">CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: sem -1 }, (_, i) => i).map(sem => {
                                    return <tr key={sem}>
                                        <th scope="row">{sem + 1}</th>
                                        <td className="text-right">
                                            <Input type="number" min="0" max="10" step="0.01" onChange ={(e)=>{
                                                setAcademicCred(prev=>{
                                                    prev.cgList[sem].sgpa = e.target.value;
                                                    return prev;
                                                })
                                            }} />
                                        </td>
                                        <td className="text-right">
                                            <Input type="number" min="0" max="10" step="0.01" onChange ={(e)=>{
                                                setAcademicCred(prev=>{
                                                    prev.cgList[sem].cgpa = e.target.value;
                                                    return prev;
                                                })
                                            }} />
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                        <br />
                    </>}

                    {
                        sem > 0 && <>

                        <label>Have Backlogs?</label>   
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2"  onChange={()=>{
                                        setBacklogFlag(true);
                                        setAcademicCred(prev=>{
                                            return {
                                                ...prev,
                                                backlogList : Array.from({ length: sem - 1}, (_, i) => i).map(_=> {return {ongoing : null, total : null}})
                                            };
                                        })
                                    }} />{' '}
                                    Yes
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" onChange={()=>{
                                        setBacklogFlag(false);
                                        setAcademicCred(prev=>{
                                            return {
                                                ...prev,
                                                backlogList : null
                                            };
                                        })
                                    }} />{' '}
                                    No
                                </Label>
                            </FormGroup>
                        </>
                    }

                    {sem > 0 && backlogFlag && <>
                        <br /><br />
                        <label>Enter Backlog Details</label>

                        <Table striped responsive>
                            <thead className="text-primary">
                                <tr>
                                    <th>Semester</th>
                                    <th className="text-right">Ongoing Backlogs</th>
                                    <th className="text-right">Total Backlogs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: sem - 1 }, (_, i) => i).map(sem => {
                                    return <tr key={sem}>
                                        <th scope="row">{sem + 1}</th>
                                        <td className="text-right">
                                            <Input type="number" min="0" max="10" step="1" onChange={(e)=>{
                                                 setAcademicCred(prev=>{
                                                    prev.backlogList[sem].ongoing = e.target.value;
                                                    return prev;
                                                })
                                            }}/>
                                        </td>
                                        <td className="text-right">
                                            <Input type="number" min="0" max="10" step="1" onChange={(e)=>{
                                                 setAcademicCred(prev=>{
                                                    prev.backlogList[sem].total = e.target.value;
                                                    return prev;
                                                })
                                            }}/>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                        <br/>
                    </>}


                    <br/>

                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label>Percentage equivalent of 12th Marks</label>
                                <Input
                                    name = "class12"
                                    onChange = {changeHandler}
                                    type="number"
                                    valid={validCRED.class12.valid}
                                    invalid={validCRED.class12.invalid}
                                />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Percentage equivalent of 10th Marks</label>
                                <Input
                                    name = "class10"
                                    onChange = {changeHandler}
                                    type="text"
                                    valid={validCRED.class10.valid}
                                    invalid={validCRED.class10.invalid}
                                />
                            </FormGroup>
                        </Col>
                    </Row>



                    <Row>
                        <div className="update ml-auto mr-auto"><center>
                            <Button
                                className="btn-round"
                                color="primary"
                                onClick={()=>props.saveFunc(academicCred)}
                                disabled = {!validator()}
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

export default AcademicDetailsForm;