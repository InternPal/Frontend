import React from "react";
import "./DisplayUserProfile.css";

import UserData from "./UserData";
import FakeDoc from "./fakeDoc.pdf";

import { Card, CardHeader, CardBody, Badge, Table } from "reactstrap";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

const DisplayUserProfile = () => {
    return <div className="content">
        <Card>

            {/* Logo + Company Name + Profile + Location */}
            <CardHeader>
                <div class="col-md-12">
                    <div class="card profile-card-3">
                        <div class="background-block">
                            <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background" />
                        </div>
                        <div class="profile-thumb-block">
                            <img src={UserData.personalDetails.displayPicture} alt="profile-image" className="profile" />
                        </div>
                        <div class="top-card-content">
                            <h2>{UserData.personalDetails.name}
                                <small>{UserData.collegeDetails.semester}th Semester . {UserData.collegeDetails.branch}</small>
                            </h2>
                            <div class="icon-block">
                                <a href="#"><i class="fa fa-github"></i></a>
                                <a href="#"> <i class="fa fa-linkedin"></i></a>
                            </div>
                            <Badge color="info" pill>{UserData.collegeDetails.job}</Badge>
                        </div>
                    </div>
                </div>
            </CardHeader>



            <br /><br />
            {/* Opening Overview */}
            <CardBody>
                <h5>Personal Details</h5>
                <Card className="card-plain">
                    <CardBody>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Name</h6></td>
                                    <td>{UserData.personalDetails.name}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Date of Birth</h6></td>
                                    <td>{UserData.personalDetails.DOB}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Gender</h6></td>
                                    <td>{UserData.personalDetails.gender}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Category</h6></td>
                                    <td>{UserData.personalDetails.category}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </CardBody>

            <CardBody>
                <h5>College Details</h5>
                <Card className="card-plain">
                    <CardBody>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">SID</h6></td>
                                    <td>{UserData.collegeDetails.SID}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Branch</h6></td>
                                    <td>{UserData.collegeDetails.branch}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Semester</h6></td>
                                    <td>{UserData.collegeDetails.semester}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Internship/Placement</h6></td>
                                    <td>{UserData.collegeDetails.job}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </CardBody>

            <CardBody>
                <h5>Contact Details</h5>
                <Card className="card-plain">
                    <CardBody>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Mobile Number</h6></td>
                                    <td>{UserData.contactDetails.contactNumber}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Email Address</h6></td>
                                    <td>{UserData.contactDetails.email}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Personal Email Address</h6></td>
                                    <td>{UserData.contactDetails.personalEmail}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </CardBody>

            <CardBody>
                <h5>Semester Wise CGPA</h5>
                <Card className="card-plain">
                    <CardBody>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Sem1</h6></td>
                                    <td>{UserData.collegeCG.sem1}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Sem2</h6></td>
                                    <td>{UserData.collegeCG.sem2}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Sem3</h6></td>
                                    <td>{UserData.collegeCG.sem3}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Sem4</h6></td>
                                    <td>{UserData.collegeCG.sem4}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Cumulative CGPA</h6></td>
                                    <td>{UserData.collegeCG.cumulative}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </CardBody>

            <CardBody>
                <h5>Semester Wise CGPA</h5>
                <Card className="card-plain">
                    <CardBody>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Sem1</h6></td>
                                    <td>{UserData.backlogs.sem2}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Sem2</h6></td>
                                    <td>{UserData.backlogs.sem2}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Sem3</h6></td>
                                    <td>{UserData.backlogs.sem3}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Sem4</h6></td>
                                    <td>{UserData.backlogs.sem4}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </CardBody>

            <CardBody>
                <h5>Grades</h5>
                <Card className="card-plain">
                    <CardBody>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Class 10 Percentage</h6></td>
                                    <td>{UserData.grades.class10Marks}</td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">Class 12 Percentage</h6></td>
                                    <td>{UserData.grades.class12Marks}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </CardBody>

            <CardBody>
                <h5>Attach Documents</h5>
                <Card className="card-plain">
                    <CardBody>
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
                    </CardBody>
                </Card>

            </CardBody>


            <br /><br />
            {/* Attached Documents */}
            <CardBody>
                <h5>Social Links</h5>
                <Card className="card-plain">
                    <CardBody>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">GitHub</h6></td>
                                    <td>
                                        <a href={UserData.socialLinks.github} target="_blank"><IoDocumentTextSharp size="20px" />Crash To GitHub</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h6 className="display-user-page-table-header">LinkedIn</h6></td>
                                    <td>
                                        <a href={UserData.socialLinks.linkenIn} target="_blank"><IoDocumentTextSharp size="20px" />Land On LinkedIn</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </CardBody>
            <br /><br />

        </Card>
    </div >
}

export default DisplayUserProfile;