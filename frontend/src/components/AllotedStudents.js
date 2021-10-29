import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Table} from "reactstrap";

const AllotedStudents = () => {
  return <div className="content">
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Alloted Students</CardTitle>
      </CardHeader>
      <CardBody>

        
        <Table responsive>
          <thead className="text-primary">
            <tr>
              <th>#</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Internship Profile</th>
              <th className="text-right">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row-applied-job">
              <td>{1}</td>
              <td>{19103003}</td>
              <td>{"Deepak Sharma"}</td>
              <td>{"Software Engineer"}</td>
              <td className="text-right">N.A.</td>
            </tr>

            <tr className="table-row-applied-job">
              <td>{2}</td>
              <td>{19103007}</td>
              <td>{"Shivam Arora"}</td>
              <td>{"Software Engineer"}</td>
              <td className="text-right">N.A.</td>
            </tr>

            <tr className="table-row-applied-job">
              <td>{3}</td>
              <td>{19103014}</td>
              <td>{"Prateek Singh"}</td>
              <td>{"Data Science"}</td>
              <td className="text-right">N.A.</td>
            </tr>

            <tr className="table-row-applied-job">
              <td>{4}</td>
              <td>{19103064}</td>
              <td>{"Dhruv Purwar"}</td>
              <td>{"Software Engineer"}</td>
              <td className="text-right">N.A.</td>
            </tr>


          </tbody>
        </Table>
      </CardBody>
    </Card>
  </div>
}

export default AllotedStudents;