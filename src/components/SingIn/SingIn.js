import React from "react";
import {connect} from "react-redux";
import {startLogin} from "../../actions/auth";
import SingInDataForm from "../SingIn/SingInDataForm"


class SingIn extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit = user => {
        this.props.startLogin(user);
    };
    render() {
        return (
            <div>
                <SingInDataForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startLogin: user=> dispatch(startLogin(user))
});

export default connect(undefined, mapDispatchToProps)(SingIn);
