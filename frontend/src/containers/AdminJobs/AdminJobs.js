import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import JobTable from "./JobTable";
import JobResultPage from "./JobResultPage";

const AdminJobs = ()=>{
    return <Switch>
            <Route path="/admin/admin-jobs/:id" exact component={JobResultPage}/>
            <Route path="/admin/admin-jobs/" component={JobTable}/>
            <Redirect to="/admin/admin-jobs/"/>
        </Switch>
}

export default AdminJobs;