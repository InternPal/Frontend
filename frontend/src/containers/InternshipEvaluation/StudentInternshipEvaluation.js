import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "../../axios";

import { Row, Col, Card, CardHeader, CardBody, Table } from "reactstrap";
import Accordion from 'react-bootstrap/Accordion'

import { BiErrorCircle } from "react-icons/bi";

//import Annexures
import Annexure1 from "./Annexures/Annexure1";
import Annexure3 from "./Annexures/Annexure3";
import Annexure4 from "./Annexures/Annexure4";
import Annexure9 from "./Annexures/Annexure9";
import Annexure10 from "./Annexures/Annexure10";
import Annexure11 from "./Annexures/Annexure11";

const StudentInternshipEvaluation = (props) => {

    const id = props.match.params.id;
    const sid = (typeof(id) === "undefined") ? props.sid : id;

    const [evalData, setEvalData] = useState(null);

    useEffect(() => {
        axios.get("/evals/" + sid)
            .then((res) => {
                setEvalData(res.data);
            })
            .catch((err) => {
                alert(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let annexures = [];
    if(props.role === "Student"){
        annexures = [
        { title : "Joining Report", form : <Annexure1 eval = {evalData}/>}, 
        { title : "Feedback Form", form : <Annexure10 eval = {evalData}/>}
    ]
    }
    else if(props.role === "Faculty Coordinator"){
        annexures = [
            { title : "First Visit Report", form : <Annexure3 eval = {evalData}/>},
            { title : "Second Visit Report", form : <Annexure4 eval = {evalData}/>}
        ];
    }
    else if(props.role === "Industry Coordinator"){
        annexures = [
            { title : "Industry Feedback Form", form : <Annexure9 eval = {evalData}/>}, 
            { title : "Industry Evaluation Form", form : <Annexure11 eval = {evalData}/>}, 
            { title : "First Visit Report (Faculty Coordinator)", form : <Annexure3 eval = {evalData}/>}, 
            { title : "Second Visit Report (Faculty Coordinator)", form : <Annexure4 eval = {evalData}/>},
            { title : "Joining Report (Student)", form : <Annexure1 eval = {evalData}/>},              
        ];
    }
    //else - Admin
    else{
        annexures = [
            { title : "Industry Evaluation Form (Industry Coordinator)", form : <Annexure11 eval = {evalData}/>},
            { title : "Industry Feedback Form (Industry Coordinator)", form : <Annexure9 eval = {evalData}/>}, 
            { title : "First Visit Report (Faculty Coordinator)", form : <Annexure3 eval = {evalData}/>}, 
            { title : "Second Visit Report (Faculty Coordinator)", form : <Annexure4 eval = {evalData}/>},
            { title : "Joining Report (Student)", form : <Annexure1 eval = {evalData}/>},              
            { title : "Feedback Form (Student)", form : <Annexure10 eval = {evalData}/>},  
        ];
    }


    return <div className="content">
        {evalData !== null &&
            <>
                {evalData !== "" ? <><Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <h5>Internship Evaluation</h5>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="job-page-table-header" width="50%">{"SID"}</th>
                                            <td width="50%">{evalData.SID}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="job-page-table-header">{"Name"}</th>
                                            <td>{evalData.studentName}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="job-page-table-header">{"Faculty Coordinator"}</th>
                                            <td>{evalData.facultyCoordinatorName}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="job-page-table-header">{"Industry Coordinator"}</th>
                                            <td>{evalData.industryCoordinatorName}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                    <Accordion>

                    {
                        annexures.map((annexure, index)=>{
                            return <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>{annexure.title}</Accordion.Header>
                            <Accordion.Body>
                                {annexure.form}
                            </Accordion.Body>
                        </Accordion.Item>
                        })
                    }
                     

                    </Accordion>

                </> :
                    <Card>
                        <CardBody>
                            <center><BiErrorCircle size="60px" color="grey" /></center>
                            <br />
                            <center><h5>Evaluation Details Not Available</h5></center>
                        </CardBody>
                    </Card>} </>}
    </div>
}

const mapStateToProps = (state) => {
    return {
        sid: state.user.sid,
        role : state.user.role
    };
}

export default connect(mapStateToProps)(StudentInternshipEvaluation);