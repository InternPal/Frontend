import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "../axios";

import { Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap";

const AllotedStudents = (props) => {

  const [allotedStudents, setAllotedStudents] = useState(null);


  useEffect(() => {

    if (props.role === "Mentor") {
      axios.get("/eval/" + props.mentorID)
        .then((res) => {
          console.log(res);
          setAllotedStudents(res.data);
        })
        .catch((err) => {
          alert(err);
        })
    }
    if (props.role === "Admin") {
      axios.get("/eval")
        .then((res) => {
          console.log(res);
          setAllotedStudents(res.data);
        })
        .catch((err) => {
          alert(err);
        })
    }
  }, []);

  return <div className="content">
    {allotedStudents !== null &&
      <Card>
        <CardHeader>
          <CardTitle tag="h4">{ props.role === "Admin" ? "Students" : "Alloted Students"}</CardTitle>
        </CardHeader>
        <CardBody>

          {allotedStudents.length === 0 ?
            <p>{ props.role === "Admin" ? "No Students" : "No Alloted Students"}</p> :
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  <th>#</th>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>{ props.role === "Admin" ? "Panel Grade" : "Mentor Grade"}</th>
                  <th className="text-right">Grade Status</th>
                </tr>
              </thead>
              <tbody>

                {
                  allotedStudents.map((student, index) => {
                    return <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{student.SID}</td>
                      <td>{student.studentName}</td>
                      <td>{ props.role === "Admin" ? (
                        student.panelGrade === null ? "N.A."
                          : student.panelGrade) :(
                        student.mentorGrade === null ? "N.A."
                          : student.mentorGrade)
                      }</td>
                      <td className="text-right">
                        <a href={
                          "/admin/grade-students/" + student.SID
                        }>View/Submit Grade</a>
                      </td>
                    </tr>
                  })
                }

              </tbody>
            </Table>}
        </CardBody>
      </Card>}
  </div>
}

const mapStateToProps = (state) => {
  return {
    mentorID: state.user.id,
    role: state.user.role
  };
}

export default connect(mapStateToProps)(AllotedStudents);