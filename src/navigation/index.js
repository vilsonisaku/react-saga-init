import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import {
  Home,
  Register,
  LoginPage,
} from "../routes-web";


import PrivateRoute from "./PrivateRoute";


const Router = ({ screenWidth, role, mobileCheck }) => {
  const isMobile = screenWidth < 1025 && mobileCheck;

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/login" component={LoginPage} />
        {/* <Route
          exact
          path="/login"
          render={() => {
            window.location.href = "http://infosystem.loc/login";
            return null;
          }}
        /> */}

        <Route exact path="/home" component={isMobile ? Home : Home} />

        {<Route path="/register/" component={Register} />}

      </Switch>
    </HashRouter>
  );
};

export default Router;
