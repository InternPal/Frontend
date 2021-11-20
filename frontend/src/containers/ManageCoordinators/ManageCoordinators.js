import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"; 

import StudentList from "./StudentList";
import AllotCoordinators from "./AllotCoordinators";

const ManageCoordinators = ()=>{
    return <Switch>
        <Route path="/admin/manage-coordinators" exact component={StudentList}/>
        <Route path="/admin/manage-coordinators/allot/:id" component={AllotCoordinators}/>
        <Redirect to = "/admin/manage-coordinators"/>
    </Switch>
};

export default ManageCoordinators;
