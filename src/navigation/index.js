import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import {
  Home,
  Register,
  LoginPage,
} from "../routes-web";


// import PrivateRoute from "./PrivateRoute";


const Router = ({ screenWidth, role, mobileCheck }) => {
  const isMobile = screenWidth < 1025 && mobileCheck;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/home" component={isMobile ? Home : Home} />

        {<Route path="/register/" component={Register} />}

      </Switch>
    </BrowserRouter>
  );
};

export default Router;
