import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { HeaderNavPrivate } from "../components/Header/HeaderNavPrivate";
import PrivateHeader from "../components/Header/PrivateHeader"
import HeaderNavPublic from "../components/Header/HeaderNavPublic";

export const NormalRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          {console.log(isAuthenticated)}
          {/* <HeaderNavPrivate/> */}
          
          <PrivateHeader/>
          <Component {...props} />
        </div>
      ) : (
        <div>
          {console.log(isAuthenticated)}
       
       <HeaderNavPublic/>
        <Component {...props} />
      </div>
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token
});
export default connect(mapStateToProps)(NormalRoute);
