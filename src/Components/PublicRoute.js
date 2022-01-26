import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { getToken } from "./Common";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/Home" }} />
        );
      }}
    />
  );
};

export default PublicRoute;
