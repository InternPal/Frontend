import React from "react";

import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import DemoNavbar from "../../components/DemoNavbar.js";
import Sidebar from "../../components/Sidebar.js";

import * as routesTypes from "../../routes";

var ps;

const StudentDashboard = (props)=>{
  let routes = [];
  if(props.role === "Student")routes = routesTypes.StudentRoutes;
  else if(props.role === "Admin")routes = routesTypes.AdminRoutes;
  else routes = routesTypes.CoordinatorRoutes;
  
const backgroundColor = "black";
const activeColor = "info";
  const mainPanel = React.useRef();
  const location = useLocation();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
        
      </div>
      
    </div>);
}

const mapStateToProps = (state)=>{
  return {
    role : state.user.role
  }
}

export default connect(mapStateToProps)(StudentDashboard);