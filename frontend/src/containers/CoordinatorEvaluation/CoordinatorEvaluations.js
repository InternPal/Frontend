import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import StudentList from "./StudentList";
import StudentInternshipEvaluation from "../InternshipEvaluation/StudentInternshipEvaluation";

const CoordinatorEvaluation = ()=>{
    return <Switch>
        <Route path="/admin/coordinator-evaluations/:id" component={StudentInternshipEvaluation} />
        <Route path="/admin/coordinator-evaluations" exact component={StudentList}/>
        <Redirect to="/admin/coordinator-evaluations"/>
    </Switch>
}

export default CoordinatorEvaluation;