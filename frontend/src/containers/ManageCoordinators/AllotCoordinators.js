import React, {useState, useEffect} from "react";
import axios from "../../axios";
import { Card, CardBody, Input, Table, Row, Col, Button } from "reactstrap";

const AllotCoordinators = (props)=>{

    const id = props.match.params.id;
    const [student, setStudent] = useState(null);
    const [facultyCoordinators, setFacultyCoordinators] = useState(null);
    const [industryCoordinators, setIndustryCoordinators] = useState(null);

    const [evalObject, setEvalObject] = useState(null);

    useEffect(()=>{
        axios.get("/students/" + id)
        .then((res)=>{
            setStudent(res.data);
            const s = res.data;
            setEvalObject({
                SID : s.SID,
                studentName : s.name,
                facultyCoordinatorID : null,
                facultyCoordinatorName : null,
                industryCoordinatorID : null,
                industryCoordinatorName : null,
            });
        })
        .catch((err)=>{
            alert(err);
        })

        axios.get("/facultyCoordinator/")
        .then((res)=>{
            setFacultyCoordinators([null, ...res.data]);
        })
        .catch((err)=>{
            alert(err);
        })

        axios.get("/industryCoordinator/")
        .then((res)=>{
            setIndustryCoordinators([null, ...res.data]);
        })
        .catch((err)=>{
            alert(err);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const changeHandler = (e)=>{
        if(e.target.name === "faculty"){
            setEvalObject(prev=>{
                return {
                    ...prev,
                    facultyCoordinatorID : e.target.value,
                    facultyCoordinatorName : (facultyCoordinators.filter(f=>f && f._id === e.target.value))[0].name,
                }
            })
        }

        if(e.target.name === "industry"){
            setEvalObject(prev=>{
                return {
                    ...prev,
                    industryCoordinatorID : e.target.value,
                    industryCoordinatorName : (industryCoordinators.filter(i=>i && i._id === e.target.value))[0].name,
                }
            })
        }
    }

    const saveEvalObject = ()=>{
        const confirm = window.confirm("Confirm Allotment ?");
        if(confirm){
            axios.post("/eval", [evalObject])
            .then((_)=>{
                alert("Allotment Successful");
                window.location.replace("http://localhost:3001/admin/manage-coordinators");
                
            })
            .catch((err)=>{
                alert(err);
            })
        }
    }

    return <div className="content">
        {student !== null && 
        <Card>
            <CardBody>
                <h5>Allot Coordinators</h5>
                <Table responsive>
                <tbody>
                    <tr>
                        <th>Student ID</th>
                        <td>{student.SID}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{student.name}</td>
                    </tr>
                    <tr>
                        <th>Branch</th>
                        <td>{student.branch}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{student.email}</td>
                    </tr>
                   { facultyCoordinators &&  <tr>
                        <th className="text-primary">
                            Select Faculty Coordinator
                        </th>
                        <td>
                            <Input type="select" name="faculty" onChange={changeHandler}>
                                {facultyCoordinators.map((f, index)=>{  
                                    return <option key={index} value={f && f._id}>{f && f.name}</option>
                                })}
                            </Input>
                        </td>
                    </tr>}
                    { industryCoordinators &&  <tr>
                        <th className="text-primary">
                            Select Industry Coordinator
                        </th>
                        <td>
                            <Input type="select" name="industry" onChange={changeHandler}>
                                {industryCoordinators.map((i, index)=>{
                                    return <option key={index} value={i && i._id}>{i && i.name}</option>
                                })}
                            </Input>
                        </td>
                    </tr>}
                </tbody>
                </Table>
                <Row>
                    <Col>
                        <center><Button
                            className="btn-round" 
                            color="primary"
                            disabled = {evalObject && (evalObject.facultyCoordinatorID=== null || evalObject.industryCoordinatorID===null)}
                            onClick = {saveEvalObject}
                            >
                            Allot Coordinators
                        </Button></center>
                    </Col>
                </Row>
            </CardBody>
        </Card>
        }
    </div>;
}

export default AllotCoordinators;