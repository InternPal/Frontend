import React, {useState, useEffect} from "react";
import { Card, CardBody, Table } from "reactstrap";
import axios from "../../axios";
import {connect} from "react-redux";


const StudentList = (props)=>{

    const [students, setStudents] = useState(null);

    useEffect(()=>{

        axios.get(`/eval/${props.role === "Faculty Coordinator" ? "facultyCoordinator" : "industryCoordinator"}/${props.id}`)
        .then((res)=>{
            setStudents(res.data);
        })
        .catch((err)=>{
            alert(err);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div className="content">
        {students !== null &&
        <Card>
            <CardBody>
                <h5>Alloted Students</h5>
                {students.length === 0 ?
                <p>No Alloted Students</p> :
                <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>#</th>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th className="text-right"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((s, index)=>{
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{s.SID}</td>
                                <td>{s.studentName}</td>
                                <td className="text-right">
                                    <a href={"/admin/coordinator-evaluations/" + s.SID}>Manage Evaluation</a>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>}
            </CardBody>
        </Card>
        }
    </div>
}

const mapStateToProps = (state)=>{
    return {
        role : state.user.role,
        id : state.user.id
    };
}

export default connect(mapStateToProps)(StudentList);
