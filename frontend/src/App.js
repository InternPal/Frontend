import React from "react";

import StudentDashboard from "./containers/StudentDashboard/StudentDashboard";
// import CreateUserProfile from "containers/CreateUserProfile/CreateUserProfile";


const App = (props) => {
    return <div>
        <StudentDashboard {...props}/>
        {/* <CreateUserProfile/> */}
    </div>
}

export default App;