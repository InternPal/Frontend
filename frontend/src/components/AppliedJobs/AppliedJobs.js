import React, {useState, useEffect} from "react";
import axios from "../../axios";
import {connect} from "react-redux";

import "./AppliedJobs.css";


import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
  } from "reactstrap";

const AppliedJobs = (props)=>{

  const [jobApplications, setJobApplications] = useState(null);

  useEffect(()=>{
    axios.get("/students/jobApp/"+props.sid)
    .then((res)=>{
      setJobApplications(res.data);
    })
    .catch((err)=>{
      alert(err);
    })
  }, []);

    return <div className="content">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Applied Jobs</CardTitle>
              </CardHeader>
              <CardBody>
                { jobApplications !== null &&
                <> {
                 jobApplications.length === 0 ? <p>No Applied Jobs</p> :
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>#</th>
                    <th>Job Profile</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th className="text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobApplications.map((job, index)=>{
                      return <tr key={index}>
                        <td>{index+1}</td>
                      <td><a href={"/admin/job-search/" + job.jobID} >{job.jobProfile}</a></td>
                      <td>{job.jobCompany}</td>
                      <td>{job.jobLocation}</td>
                      <td className="text-right" 
                        style = {{
                          color : job.status === "Rejected" ? "red" : (job.status === "Accepted" ? "green" : "black")
                        }}
                        >{job.status}</td>
                      </tr>
                    })}
                   
                  </tbody>
                </Table>}</> 
}
              </CardBody>
            </Card>
    </div>
}

const mapStateToProps = (state)=>{
  return {
    sid : state.user.sid,
  };
}

export default connect(mapStateToProps)(AppliedJobs);