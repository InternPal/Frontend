import React, {useState} from "react";

import {
    Card,CardBody, Table
} from "reactstrap";

import JobSearchPanel from "./JobSearchPanel";

//demo 
import JobsData from "./fakeData";

const JobTable = () => {
    //demo
    const [showTable, toggleTable] = useState(false);


    return <div className="content">

        <JobSearchPanel
        searchFunc = {()=>{
            //demo
            toggleTable(prev=>!prev)
        }}
        />
        
       { showTable && <Card>
            <CardBody>
                <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th></th>
                            <th>Job Profile</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th className="text-right">Results</th>
                        </tr>
                    </thead>
                    <tbody>

                        {JobsData.map((job, index)=>{
                            return  <tr key={index}>
                            <td>
                                <img
                                    src= {job.imgSrc}
                                    className="company-logo-table"
                                />
                            </td>  {/* logo link */}
                            <td>{job.jobProfile}</td>
                            <td>{job.company}</td>
                            <td>{job.location}</td>
                            <td className="text-right"><a href={"/admin/admin-jobs/" + (index)}>{"View / Post Results"}</a></td>
                        </tr>
                        })}

                    </tbody>
                </Table>
            </CardBody>
        </Card>}
    </div>
}

export default JobTable;