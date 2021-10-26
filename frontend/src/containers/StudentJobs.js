import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import JobSearch from "./JobSearch/JobSearch";
import JobPage from "../components/JobPage/JobPage";

const StudentJobs = ()=>{
    return <Switch>
        <Route path="/admin/job-search/:id" component={JobPage}/>
        <Route path="/admin/job-search" component={JobSearch}/>
        <Redirect to="/admin/job-search"/>
    </Switch>
}

export default StudentJobs;