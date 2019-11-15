import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import HeaderNavPublic from "../components/Header/HeaderNavPublic";

export const PublicRouter = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? <Redirect to="/home" /> : (<div><HeaderNavPublic/> <Component {...props} /></div>)
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token
});
export default connect(mapStateToProps)(PublicRouter);
