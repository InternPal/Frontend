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



const AcademicDetailsForm = (props) => {

    const [academicCred, setAcademicCred] = useState({
        branch : null,
        semester : null,
        class10 : null,
        class12 : null,
        cgTable : null,
        backlogTable : null 
    });

    const changeHandler = (e)=>{
        setAcademicCred(prev=>{
            return {
                ...prev,
                [e.target.name] : e.target.value
            };
        })
    }

    const Branches = ["---Select---", "Aerospace Engineering",
        "Civil Engineering",
        "Computer Science & Engineering",
        "Electrical Engineering",
        "Electronics and Communication Engineering",
        "Mechanical Engineering",
        "Metallurgical & Materials Engineering",
        "Production and Industrial Engineering"];

    const semesters = Array.from({ length: 9 }, (_, i) => i);

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
                                    onChange={(event) => {
                                        changeSem(event.target.value)
                                        setAcademicCred(prev=>{
                                            return {
                                                ...prev,
                                                semester : event.target.value,
                                                cgTable : Array.from({ length: event.target.value }, (_, i) => i).map(_=> {return {cgpa : null, sgpa : null}})
                                            };
                                        })
                                        changeHandler(event)
                                    }}
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
                                {Array.from({ length: sem }, (_, i) => i).map(sem => {
                                    return <tr key={sem}>
                                        <th scope="row">{sem + 1}</th>
                                        <td className="text-right">
                                            <Input type="number" min="0" max="10" step="0.01" onChange ={(e)=>{
                                                setAcademicCred(prev=>{
                                                    prev.cgTable[sem].sgpa = e.target.value;
                                                    return prev;
                                                })
                                            }} />
                                        </td>
                                        <td className="text-right">
                                            <Input type="number" min="0" max="10" step="0.01" onChange ={(e)=>{
                                                setAcademicCred(prev=>{
                                                    prev.cgTable[sem].cgpa = e.target.value;
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
                                                backlogTable : Array.from({ length: sem}, (_, i) => i).map(_=> {return {ongoing : null, total : null}})
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
                                                backlogTable : null
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
                                {Array.from({ length: sem }, (_, i) => i).map(sem => {
                                    return <tr key={sem}>
                                        <th scope="row">{sem + 1}</th>
                                        <td className="text-right">
                                            <Input type="number" min="0" max="10" step="1" onChange={(e)=>{
                                                 setAcademicCred(prev=>{
                                                    prev.backlogTable[sem].ongoing = e.target.value;
                                                    return prev;
                                                })
                                            }}/>
                                        </td>
                                        <td className="text-right">
                                            <Input type="number" min="0" max="10" step="1" onChange={(e)=>{
                                                 setAcademicCred(prev=>{
                                                    prev.backlogTable[sem].total = e.target.value;
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