import React from "react";
import {Switch, Redirect, Route} from "react-router-dom";

import StudentDashboard from "./containers/StudentDashboard/StudentDashboard";
import AuthPage from "./containers/AuthPage/AuthPage";
// import CreateUserProfile from "containers/CreateUserProfile/CreateUserProfile";


const App = (props) => {
    return <div>
        <Switch>
            <Route path="/auth" render={()=><AuthPage/>}/>
            <Route path="/" render={(props)=> <StudentDashboard {...props}/>}/>
            <Redirect to="/"/>
        </Switch>
        {/* <CreateUserProfile/> */}
    </div>
}

export default App;