import React from "react";

import { Route, Link } from "react-router-dom";

class RegisterUser extends React.Component {
  render() {
    return (
      <div>
        <Link
          to={{
            pathname: "/createuser/step1"
          }}
        >
          Cadastrar Usuario
        </Link>
      </div>
    );
  }
}

export default RegisterUser;
