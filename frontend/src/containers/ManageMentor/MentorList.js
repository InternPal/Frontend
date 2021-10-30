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
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mentors.map((mentor, index)=>{
                            
                        })}
                    </tbody>
                </Table></>}
            </CardBody>
        </Card>}
    </div>
}

export default MentorList;