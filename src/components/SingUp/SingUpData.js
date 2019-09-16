import React from "react";
import { connect } from "react-redux";

import SingUpDataForm from "./SingUpDataForm";
import { startAddUserData } from "../../actions/users";

class SingUpData extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit = user => {
    this.props.startAddUserData(user);
    console.log(user);
    this.props.history.push("/createuser/step2", { user });
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Cadastro</h1>
          </div>
        </div>

        <div className="content-container">
          <SingUpDataForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddUserData: user => dispatch(startAddUserData(user))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SingUpData);
