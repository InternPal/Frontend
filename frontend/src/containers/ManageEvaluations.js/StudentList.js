import React, {useState, useEffect} from "react";
import axios from "../../axios";
import { Card, CardBody, Table } from "reactstrap";

const StudentList = ()=>{

    const [students, setStudents] = useState(null);

    useEffect(()=>{
        axios.get("/eval")
        .then((res)=>{
            setStudents(res.data);
        })
        .catch((err)=>{
            alert(err);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return <div className="content">
        { students !== null &&
        <Card>
        <CardBody>
            <h5>Manage Evalautions</h5>
            {students.length === 0 ? <p>No Students</p> : 
            <Table responsive>
                <thead>
                    <tr className="text-primary">
                        <th>SID</th>
                        <th>Name</th>
                        <th>Faculty Coordinator</th>
                        <th>Industry Coordinator</th>
                        <th className="text-right"></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s, index)=>{
                        return <tr key={index}>
                            <td>{s.SID}</td>
                            <td>{s.studentName}</td>
                            <td>{s.facultyCoordinatorName}</td>
                            <td>{s.industryCoordinatorName}</td>
                            <td className="text-right">
                                <a href={"/admin/manage-evaluations/reports/" + s.SID}>Click to view Reports</a>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
            }
        </CardBody>
    </Card>}
    </div>
}

export default StudentList;