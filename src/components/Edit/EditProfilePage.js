import React from 'react';
import EditProfile from './EditProfileForm';
import { connect } from "react-redux";
import {startEditUser,startSetUser} from "../../actions/users"
import moment from 'moment';


class EditProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onSubmit=(user)=>{
      console.log(this.props.auth)
      this.props.startEditUser(this.props.user.id,user,this.props.auth)
      this.props.history.push("/");
    }

    render() { 
        return ( <div>
            <EditProfile user={this.props.user} onSubmit={this.onSubmit}/>
        </div> );
    }
}
 
const mapStateToProps = (state) => {
   let userObject=state.users;
   Object.keys(userObject).forEach((key,index)=>{
        if(userObject[key]===null){
          userObject[key]=""
        }
   })

    Object.keys(userObject.address).forEach((key)=>{
          if(userObject.address[key]===null){
          userObject.address[key]=""
          }
        })
        userObject.birthDate =  moment()

    return {
      user: userObject,
      auth: state.auth
    };
  };
 
  
  const mapDispatchToProps = dispatch => ({
    startEditUser: (id, user,auth) => dispatch(startEditUser(id, user, auth))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditProfilePage);