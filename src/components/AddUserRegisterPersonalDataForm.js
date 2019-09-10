import React from "react";
import { UserRegisterPersonalDataForm } from "./UserRegisterPersonalDataForm";

export class AddUserRegisterPersonalDataForm extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit = user => {
    this.props.handleUser(user);
    this.props.handleStatus("documentosPessoais");
  };

  // onSubmit = user => {
  //   this.props.startAddUserData(user);
  //   this.props.history.push("/");
  // };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Dados Pessoais</h1>
          </div>
        </div>
        <div className="content-container">
          <UserRegisterPersonalDataForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default AddUserRegisterPersonalDataForm;

// const mapDispatchToProps = dispatch => ({
//   startAddUserData: user => dispatch(startAddUserData(user))
// });

// export default connect(
//   undefined,
//   mapDispatchToProps
// )(AddUserRegisterPersonalDataForm);
