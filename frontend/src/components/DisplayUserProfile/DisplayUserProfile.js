import React, { useEffect, useState } from "react";
import "./DisplayUserProfile.css";

import { connect } from "react-redux";
import axios from "../../axios";


import {
    Card, CardHeader, CardBody, Table,
    Modal, ModalBody, ModalHeader, ModalFooter,
    Button
} from "reactstrap";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"

const DisplayUserProfile = (props) => {

    const [user, setUser] = useState(null);
    const [showModal, toggleModal] = useState(false);
    const [index, setIndex] = useState(null);

    let docList = [];
    let modalTitle = [];

    const displayModal = (i)=>{
        console.log(i);
        setIndex(i);
        toggleModal(true);
    }

    const hideModal = ()=>{
        toggleModal(false);
    }

    if(user){
        docList = [user.resume, user.collegeDMC, user.class12DMC, user.class10DMC];
        modalTitle = ["Resume", "College DMC", "Class XII DMC", "Class X DMC"];
    }



    useEffect(() => {
        console.log("making request");
        axios.get("/students/" + props.id)
            .then((res) => {
                setUser(res.data)
            })
            .catch(err => {
                alert(err);
            })
    }, []);

    return <div className="content">{
        user === null ? null :
            <Card>
                <div>
                </div>

                <CardHeader>
                    <div className="user-header-div">
                        <div className="user-header-div-2"></div>
                        <center>
                            <div
                                className="user-image-header-div" >
                                <img className="user-image-header"
                                    src={user.userDP}
                                    alt="User Display Picture"
                                />
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
                                <td>{user.dob.slice(0, 10)}</td>
                            </tr>
                            <tr>
                                <td><h6 className="display-user-page-table-header">Gender</h6></td>
                                <td>{user.gender}</td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
                <br /><br />

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
                                    <a href={user.github} target="_blank"><IoLogoGithub size="20px" style={{ marginRight: "5px" }} />GitHub</a>
                                </td>
                            </tr>
                            <tr>
                                <td><h6 className="display-user-page-table-header">LinkedIn</h6></td>
                                <td>
                                    <a href={user.linkedin} target="_blank"><IoLogoLinkedin size="20px" style={{ marginRight: "5px" }} />LinkedIn</a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
                <br /><br />

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
                            {user.cgList.map((data, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="text-right">{data.sgpa}</td>
                                    <td className="text-right">{data.cgpa}</td>
                                </tr>
                            })}

                        </tbody>
                    </Table>
                </CardBody>
                <br /><br />

                <CardBody>
                    <h5>Backlog Details</h5>
                    {user.backlogs === 0 ? <p>No backlogs</p> :
                        <Table striped responsive>
                            <thead className="text-primary">
                                <tr>
                                    <th width="30%">Sem</th>
                                    <th width="40%" className="text-right">Ongoing Backlogs</th>
                                    <th width="40%" className="text-right">Total Backlogs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.backlogList.map((data, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className="text-right">{data.ongoing}</td>
                                        <td className="text-right">{data.total}</td>
                                    </tr>
                                })}

                            </tbody>
                        </Table>}
                </CardBody>
                <br /><br />



                <CardBody>
                    <h5>Attached Documents</h5>
                    <Table striped>
                        <tbody>
                            <tr>
                                <td width="30%"><h6 className="display-user-page-table-header">Resume</h6></td>
                                <td width="40%" className="text-right">
                                    <Button className="btn-round" color="primary" onClick={()=>{displayModal(0)}}><IoDocumentTextSharp size="20px" /> View</Button>
                                </td>
                                <td width="40%" className="text-right">
                                    <a href={user.resume} download><FiDownload size="20px" /> Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td><h6 className="display-user-page-table-header">Latest College DMC</h6></td>
                                <td className="text-right">
                                <Button className="btn-round" color="primary" onClick={()=>{displayModal(1)}}><IoDocumentTextSharp size="20px" /> View</Button>                                </td>
                                <td className="text-right">
                                    <a href={user.collegeDMC} download><FiDownload size="20px" /> Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td><h6 className="display-user-page-table-header">Class 12th DMC</h6></td>
                                <td className="text-right">
                                <Button className="btn-round" color="primary" onClick={()=>{displayModal(2)}}><IoDocumentTextSharp size="20px" /> View</Button>                                </td>
                                <td className="text-right">
                                    <a href={user.class12DMC} download><FiDownload size="20px" /> Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td><h6 className="display-user-page-table-header">Class 10th DMC</h6></td>
                                <td className="text-right">
                                <Button className="btn-round" color="primary" onClick={()=>{displayModal(3)}}><IoDocumentTextSharp size="20px" /> View</Button>                                </td>
                                <td className="text-right">
                                    <a href={user.class10DMC} download><FiDownload size="20px" /> Download</a>
                                </td>
                            </tr>

                        </tbody>
                    </Table>

              <Modal
                        fullscreen = {true}
                        scrollable
                        size="lg"
                        toggle={hideModal}
                        isOpen = {showModal}
                    >
                        <ModalHeader
                         toggle={hideModal}
                         >
                           {modalTitle[index]}
                        </ModalHeader>
                        <ModalBody>
                            <center>
                            <object type="application/pdf" data={docList[index]} className="doc-display"></object>
                            </center>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={hideModal} className="btn-round" color="primary">
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal> 

                </CardBody>

            </Card>}
    </div >
}

const mapStateToProps = (state) => {
    return {
        id: state.user.id
    };
}

export default connect(mapStateToProps)(DisplayUserProfile);