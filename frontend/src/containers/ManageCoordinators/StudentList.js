import React, {useState, useEffect} from "react";
import axios from "../../axios";
import { Card, CardBody, Table } from "reactstrap";

const StudentList = ()=>{

    const [students, setStudents] = useState(null);

    useEffect(()=>{
        axios.get("/students/unAlloted")
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
            <h5>Unalloted Students</h5>
            {students.length === 0 ? <p>No Unalloted Students</p> : 
            <Table responsive>
                <thead>
                    <tr className="text-primary">
                        <th>SID</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th className="text-right"></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s, index)=>{
                        return <tr key={index}>
                            <td>{s.SID}</td>
                            <td>{s.name}</td>
                            <td>{s.branch}</td>
                            <td className="text-right">
                                <a href={"/admin/manage-coordinators/allot/" + s._id}>Click to allot Coordinators</a>
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