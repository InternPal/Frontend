import React from "react";
import "./AppliedJobs.css";


import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
  } from "reactstrap";

const AppliedJobs = ()=>{
    return <div className="content">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Applied Jobs</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                    <th></th>
                    <th>Job Profile</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th className="text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr  className = "table-row-applied-job">
                    <td>
                    <img 
                    src="https://images.squarespace-cdn.com/content/v1/54d7d9f3e4b0adb809875cd9/1427991323091-IRTLN4QVP7WDG4N573BQ/01.jpg"
                    className = "company-logo-table"
                    />
                    </td>  {/* logo link */}
                    <td>Software Developer</td>
                    <td>JP Morgan Chase</td>
                    <td>Bangalore</td>
                    <td className="text-right">Applied</td>
                    </tr>

                    <tr  className = "table-row-applied-job">
                    <td>
                    <img 
                    src="https://cdn-icons-png.flaticon.com/512/825/825539.png"
                    className = "company-logo-table"
                    />
                    </td>  {/* logo link */}
                    <td>Data Science</td>
                    <td>American Express</td>
                    <td>Pune</td>
                    <td className="text-right">Applied</td>
                    </tr>
                   
                  </tbody>
                </Table>
              </CardBody>
            </Card>
    </div>
}

export default AppliedJobs;