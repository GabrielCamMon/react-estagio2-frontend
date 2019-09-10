import React from "react";
import AddUserRegisterPersonalDataForm from "./AddUserRegisterPersonalDataForm";
import AddUserRegisterDocumentDataForm from "./AddUserRegisterDocumentDataForm";

class RegisterUser extends React.Component {
  state = {
    status: "dadosPessoais",
    user: {}
  };

  handleStatus = status => {
    this.setState(() => ({ status }));
  };
  handleUser = user => {
    this.setState(() => ({ user }));
  };
  render() {
    return (
      <div>
        {this.state.status === "dadosPessoais" && (
          <AddUserRegisterPersonalDataForm
            handleStatus={this.handleStatus}
            handleUser={this.handleUser}
          />
        )}

        {this.state.status === "documentosPessoais" && (
          <AddUserRegisterDocumentDataForm
            handleStatus={this.handleStatus}
            handleUser={this.handleUser}
          />
        )}
      </div>
    );
  }
}

export default RegisterUser;
