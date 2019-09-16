import React from "react";
import { connect } from "react-redux";
import UserRegisterDocumentTypeData from "./UserRegisterDocumentTypeData";
import UserRegisterRGDocumentDataForm from "./UserRegisterRGDocumentDataForm";

export class AddUserRegisterDocumentData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeDocument: "RG"
    };
  }

  onSubmit = user => {
    this.props.startAddUserData(user);
  };

  onChangeTypeDocument = typeDocument => {
    console.log(typeDocument);
    this.setState({ typeDocument });
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Documentos</h1>
          </div>
        </div>
        <UserRegisterDocumentTypeData
          onChangeTypeDocument={this.onChangeTypeDocument}
        />
        <div className="content-container">
          <UserRegisterRGDocumentDataForm />
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
  startAddUserData: user => dispatch(startAddUserData(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserRegisterDocumentData);
