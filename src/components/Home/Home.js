import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import Header from "../Header/Header"


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <div>
            <Header/>
            Home
            <ul>
                <li>
                    <Link to="/user/singin">Login</Link>
                </li>
                <li>
                    <Link to="/user/create">Cadastra-se</Link>
                </li>
            </ul>
        </div>);
    }
}
 
 
const mapStateToProps = (state, props) => {
    return {
      user: state.user,
      auth: state.auth
    };
  };
  
  const mapDispatchToProps = dispatch => ({

  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);