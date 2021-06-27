import React from "react";

import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, role, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        role !== "player" && role !== "" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/home", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
