import React, { useState, useEffect } from "react";
import {Row, Col, Button} from "reactstrap";
import axios from "../../axios";
import Select from 'react-select';


const AllotForm = ({ mentor , reset}) => {

    const [unAllotedStudents, setUnallotedStudents] = useState(null);

    const [evalObjects, setEvalObjects] = useState([]);

    useEffect(() => {
        axios.get('/students/unAlloted')
            .then((res) => {
                setUnallotedStudents(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                alert(err);
            })
    }, []);

    let studentOptions = [];
    if(unAllotedStudents !== null){
        studentOptions = unAllotedStudents.map((s)=>{
            return {
                label : s.SID + " " + s.name,
                value : s.SID + " " + s.name,
            }
        })
    }

    const saveEvalObjects = ()=>{
        let confirm = window.confirm("Confirm Student Allotment?");
        if(confirm){
            axios.post("/eval", evalObjects)
            .then((res)=>{
                alert("Allotment Successful");
                axios.get('/students/unAlloted')
            .then((res) => {
                setUnallotedStudents(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                alert(err);
            })
                reset();
            })
            .catch((err)=>{
                alert(err);
            })
        }
    }

    return <>
    { unAllotedStudents !== null &&
        <>
        <Row>
            <Col lg="12">
            <Select
            isMulti
            name=""
            options={studentOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={e => {
                setEvalObjects(
                    e.map(data=>{
                        return {
                            SID : data.value.slice(0,8),
                            studentName : data.value.slice(9),
                            mentorID : mentor._id,
                            mentorName : mentor.name,
                            midtermReport : null,
                            finalReport : null,
                            mentorGrade : null,
                            panelGrade : null,
                            finalGrade : null
                        };
                    })
                )
            }}
        />
            </Col>
        </Row>
        
        <Row>
            <Col lg="12">
                <center>
                    <Button className="btn-round" color="primary" onClick = {saveEvalObjects}>
                        Save
                    </Button>
                </center>
            </Col>
        </Row>

        </>}
    </>
        
}

export default AllotForm;