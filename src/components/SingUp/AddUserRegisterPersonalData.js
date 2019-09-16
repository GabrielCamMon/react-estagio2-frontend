import React from "react";
import { UserRegisterPersonalDataForm } from "./UserRegisterPersonalDataForm";
import { connect } from "react-redux";
import { startEditUser } from "../../actions/users";

export class AddUserRegisterPersonalData extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = user => {
    console.log(user);
    this.props.startEditUser(this.props.user.id, user);
  };
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

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find(user => user.id === props.location.state.user.id)
  };
};

const mapDispatchToProps = dispatch => ({
  startEditUser: (id, user) => dispatch(startEditUser(id, user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserRegisterPersonalData);
