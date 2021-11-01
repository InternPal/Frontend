import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import AllotedStudents from "../components/AllotedStudents";
import SubmitGrades from "../components/SubmitGrade";

const GradeStudents = ()=>{
    return <Switch>
        <Route path="/admin/grade-students/:id" component={SubmitGrades}/>
        <Route path="/admin/grade-students" component={AllotedStudents}/>
        <Redirect to = "/admin/grade-students" />
    </Switch>
}

export default GradeStudents;