import React from "react";
import {connect} from "react-redux";
import {startCreateUserData} from "../../actions/users";
import RegisterUser from "./RegisterUser";


class SingUpData extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit = user => {
        this.props.startCreateUserData(user);
    };
    render() {
        return (
            <div>
                <RegisterUser onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startCreateUserData: user => dispatch(startCreateUserData(user))
});

export default connect(undefined, mapDispatchToProps)(SingUpData);
