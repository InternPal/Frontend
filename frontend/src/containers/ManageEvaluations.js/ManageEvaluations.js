import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"; 

import StudentList from "./StudentList";
import StudentInternshipEvaluation from "../InternshipEvaluation/StudentInternshipEvaluation";

const ManageEvaluations = ()=>{
    return <Switch>
        <Route path="/admin/manage-evaluations" exact component={StudentList}/>
        <Route path="/admin/manage-evaluations/reports/:id" component={StudentInternshipEvaluation}/>

        <Redirect to="/admin/manage-evaluations" />
    </Switch>
}

export default ManageEvaluations;