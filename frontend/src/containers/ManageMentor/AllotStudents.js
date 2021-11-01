import React, { useState, useEffect } from "react";
import { Card, CardBody, Button, Row, Col, Table } from "reactstrap";
import axios from "../../axios";

import AllotForm from "./AllotForm";

const AllotStudents = (props) => {

    const mentorID = props.match.params.id;
    const [mentor, setMentor] = useState(null);

    const [showAllotedStudents, setShowAllotedStudents] = useState(false);
    const [allotedStudents, setAllotedStudents] = useState(null);

    const searchAllotedStudents = () => {
        axios.get("/eval/" + mentorID)
            .then((res) => {
                setAllotedStudents(res.data);
                setShowAllotedStudents(true);
            })
            .catch((err) => {
                alert(err);
            })
    }

    const reset = ()=>{
        axios.get("/eval/" + mentorID)
        .then((res) => {
            setAllotedStudents(res.data);
        })
        .catch((err) => {
            alert(err);
        })
    }

    useEffect(() => {
        axios.get("/mentors/" + mentorID)
            .then((res) => {
                setMentor(res.data);
            })
            .catch((err) => {
                alert(err);
            })
    }, [])

    return <div className="content">
        {mentor !== null && <><Card>
            <CardBody>
                <h5>{mentor.name}</h5>
                <p>{mentor.email}</p>
                <br /><br />
               
                <Row>
                    <Col>
                        <center>
                            <Button className="btn-round" color="success" onClick={searchAllotedStudents}>
                                Show Alloted Students
                            </Button>
                        </center>
                    </Col>
                </Row>
                </CardBody>
        </Card>

            <Card>
                <CardBody>
                    <h5>Allot Students</h5>
            <AllotForm mentor = {mentor} reset = {reset} />
            </CardBody>
            </Card></>

        }

        {showAllotedStudents && <Card>
            <CardBody>
                {allotedStudents.length === 0 ?
                    <h5>No Alloted Students</h5> : <Table responsive>
                        <thead className="text-primary">
                            <tr>
                                <th>#</th>
                                <th>Student ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allotedStudents.map((student, index)=>{
                                return <tr key={student.SID}>
                                    <td>{index+1}</td>
                                    <td>{student.SID}</td>
                                    <td>{student.studentName}</td>
                                </tr>
                                
                            })}
                        </tbody>
                    </Table>}
            </CardBody>
        </Card>}


    </div>
}

export default AllotStudents;