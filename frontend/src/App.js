import React from "react";
import {Switch, Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

import StudentDashboard from "./containers/StudentDashboard/StudentDashboard";
import AuthPage from "./containers/AuthPage/AuthPage";
import CreateUserProfile from "containers/CreateUserProfile/CreateUserProfile";


const App = (props) => {
    let routes = <></>;
    if(props.role === null || typeof(props.role) === "undefined"){
        routes = <Switch>
             <Route path="/auth" render={()=><AuthPage/>}/>
             <Route path="/student-register" render={()=><CreateUserProfile/>}/>
             <Redirect to="/auth"/>
        </Switch>
    }else{
        routes = <Switch>
        <Route path="/admin" render={(props)=> <StudentDashboard {...props}/>}/>
        <Redirect to="/admin"/>
    </Switch>
    }
    return <div>
        {routes}
    </div>
}

const mapStateToProps = (state)=>{
    return {
        role : state.user.role
    }
}

export default connect(mapStateToProps)(App);