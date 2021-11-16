import React, {useState, useEffect} from "react";
import axios from "../../axios";

import { Card, CardBody, Table } from "reactstrap";

const MentorList = ()=>{

    const [mentors, setMentors] = useState(null);

    useEffect(()=>{
        axios.get("/mentors")
        .then((res)=>{
            setMentors(res.data);
        })
        .catch((err)=>{
            alert(err);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div className="content">
        {mentors !== null && <Card>
            <CardBody>
                { mentors.length === 0 ?
                 <h5>No Mentors To Manage</h5> 
                :<><h5>Mentor List</h5>
                <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th width="10%">#</th>
                            <th width="30%">Name</th>
                            <th width="30%">Email</th>
                            <th width="30%" className="text-right"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mentors.map((mentor, index)=>{
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{mentor.name}</td>
                                <td>{mentor.email}</td>
                                <td className="text-right">
                                    <a href={"/admin/manage-mentor/" + mentor._id}>
                                        Click To Manage Students
                                    </a>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table></>}
            </CardBody>
        </Card>}
    </div>
}

export default MentorList;