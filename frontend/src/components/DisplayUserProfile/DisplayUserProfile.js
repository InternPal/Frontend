import React, {useEffect, useState} from "react";
import "./DisplayUserProfile.css";

import { connect } from "react-redux";
import axios from "../../axios";


import { Card, CardHeader, CardBody, Table } from "reactstrap";
// import { IoDocumentTextSharp } from "react-icons/io5";
// import { FiDownload } from "react-icons/fi";

import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"

const DisplayUserProfile = (props) => {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        console.log("making request");
        axios.get("/students/" + props.id)
        .then((res)=>{
            setUser(res.data)
        })
        .catch(err=>{
            alert(err);
        })
    }, []);

    return <div className="content">{
        user === null ? null :
        <Card>
            <CardHeader>
                <div className="user-header-div">
                    <div className="user-header-div-2"></div>
                    <center>
                        <div 
                        className="user-image-header-div" >
                            <img className="user-image-header" src="https://i.pinimg.com/originals/32/cb/60/32cb600629bfdad9cbe5f138a67dc7d3.jpg"/>
                        </div>
                    </center>
                </div>
            </CardHeader>


            <br /><br />
            {/* Opening Overview */}

            <CardBody>
                <h5>Personal Details</h5>
                        <Table striped responsive>
                            <tbody>
                            <tr>
                                    <td width="50%"><h6 className="display-user-page-table-header">Student Id</h6></td>
                                    <td width="50%">{user.SID}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Name</h6></td>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Branch</h6></td>
                                    <td>{user.branch}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Date of Birth</h6></td>
                                    <td>{user.dob.slice(0,10)}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Gender</h6></td>
                                    <td>{user.gender}</td>
                                </tr>
                            </tbody>
                        </Table>
            </CardBody>
            <br/><br/>

            <CardBody>
                <h5>Additional Details</h5>
                        <Table striped responsive>
                            <tbody>
                                <tr>
                                    <td width="50%"><h6 className="display-user-page-table-header">Phone Number</h6></td>
                                    <td width="50%">{user.phone}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Email Address</h6></td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                <td><h6 className="display-user-page-table-header">GitHub</h6></td>
                                    <td>
                                        <a href={user.github} target="_blank"><IoLogoGithub size="20px" style={{marginRight : "5px"}}/>GitHub</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">LinkedIn</h6></td>
                                    <td>
                                        <a href={user.linkedin} target="_blank"><IoLogoLinkedin size="20px" style={{marginRight : "5px"}}/>LinkedIn</a>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
            </CardBody>
            <br/><br/>

            <CardBody>
                <h5>Semester-wise SGPA / CGPA</h5>
                        <Table striped responsive>
                            <thead className="text-primary">
                                <tr>
                                    <th width="30%">Sem</th>
                                    <th width="40%" className="text-right">SGPA</th>
                                    <th width="40%" className="text-right">CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.cgList.map((data, index)=>{
                                    return  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="text-right">{data.sgpa}</td>
                                    <td className="text-right">{data.cgpa}</td>
                                </tr>
                                })}
                               
                            </tbody>
                        </Table>
            </CardBody>
            <br/><br/>

            <CardBody>
                <h5>Backlog Details</h5>
                { user.backlogs === 0 ? <p>No backlogs</p> : 
                        <Table striped responsive>
                            <thead className="text-primary">
                                <tr>
                                    <th width="30%">Sem</th>
                                    <th width="40%" className="text-right">Ongoing Backlogs</th>
                                    <th width="40%" className="text-right">Total Backlogs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.backlogList.map((data, index)=>{
                                    return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="text-right">{data.ongoing}</td>
                                    <td className="text-right">{data.total}</td>
                                </tr>
                                })}
                                
                            </tbody>
                        </Table>}
            </CardBody>
            <br/><br/>

            {/* <CardBody>
                <h5>Attach Documents</h5>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Your Resume</h6></td>
                                    <td>
                                        <a href={FakeDoc} target="_blank"><IoDocumentTextSharp size="20px" /> View</a>
                                    </td>
                                    <td>
                                        <a href={FakeDoc} download><FiDownload size="20px" /> Download</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Latest College DMC</h6></td>
                                    <td>
                                        <a href={FakeDoc} target="_blank"><IoDocumentTextSharp size="20px" /> View</a>
                                    </td>
                                    <td>
                                        <a href={FakeDoc} download><FiDownload size="20px" /> Download</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Class 12th DMC</h6></td>
                                    <td>
                                        <a href={FakeDoc} target="_blank"><IoDocumentTextSharp size="20px" /> View</a>
                                    </td>
                                    <td>
                                        <a href={FakeDoc} download><FiDownload size="20px" /> Download</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Class 10th DMC</h6></td>
                                    <td>
                                        <a href={FakeDoc} target="_blank"><IoDocumentTextSharp size="20px" /> View</a>
                                    </td>
                                    <td>
                                        <a href={FakeDoc} download><FiDownload size="20px" /> Download</a>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
            </CardBody> */}

        </Card> }
    </div > 
}

const mapStateToProps = (state)=>{
    return {
        id : state.user.id
    };
}

export default connect(mapStateToProps)(DisplayUserProfile);