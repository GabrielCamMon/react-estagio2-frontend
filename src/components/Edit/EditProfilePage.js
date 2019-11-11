import React from 'react';
import EditProfile from './EditProfileForm';
import { connect } from "react-redux";
import {startEditUser,startSetUser} from "../../actions/users"


class EditProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
componentWillMount(){
 
}

    onSubmit=(user)=>{

    }

    render() { 
        return ( <div>
            <EditProfile onSubmit={this.onSubmit}/>
        </div> );
    }
}
 
const mapStateToProps = (state, props) => {
    return {
      user: state.user,
      auth: state.auth
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    startSetUser: (auth) =>dispatch(startSetUser(auth)),
    startEditUser: (id, user) => dispatch(startEditUser(id, user))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditProfilePage);