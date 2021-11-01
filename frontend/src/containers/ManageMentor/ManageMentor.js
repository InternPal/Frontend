import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import MentorList from "./MentorList";
import AllotStudents from "./AllotStudents";

const ManageMentor = ()=>{
    return <Switch>
        <Route path = "/admin/manage-mentor/:id" component={AllotStudents}/>
        <Route path = "/admin/manage-mentor" component={MentorList}/>
        <Redirect to="/admin/manage-mentor"/>
    </Switch>
}

export default ManageMentor;