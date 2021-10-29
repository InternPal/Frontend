import React, {useState} from "react";
import axios from "../../axios";

import {
    Card,CardBody, Table
} from "reactstrap";

import JobSearchPanel from "./JobSearchPanel";


const JobTable = () => {

    const [jobs, setJobs] = useState(null);

    const searchJobs = (searchCreds)=>{
        console.log(searchCreds);
        axios.get("/admins/getJobs/" + searchCreds.year + "/" + searchCreds.jobType)
        .then((res)=>{
            setJobs(res.data)
        })
        .catch((err)=>{
            alert(err);
        })
    }


    return <div className="content">

        <JobSearchPanel
        searchFunc = {searchJobs}
        />
        
       { jobs!== null && <Card>
            <CardBody>
              { jobs.length === 0 ? <h5>No Matching Jobs</h5> :  <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>#</th>
                            <th>Job Profile</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th className="text-right">Results</th>
                        </tr>
                    </thead>
                    <tbody>

                        {jobs.map((job, index)=>{
                            return  <tr key={index}>
                            <td><img
                                    src= {job.logo}
                                    className="company-logo-table"
                                /></td> 
                            <td>{job.profile}</td>
                            <td>{job.name}</td>
                            <td>{job.location}</td>
                            <td className="text-right"><a href={"/admin/admin-jobs/" + (job._id)}>{"View / Post Results"}</a></td>
                        </tr>
                        })}

                    </tbody>
                </Table>}
            </CardBody>
        </Card>}
    </div>
}

export default JobTable;