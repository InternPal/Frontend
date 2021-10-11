import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/"><App/></Route>
      <Redirect to="/"/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
