import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

export const PrivateHeader = ({ userName, user_id,logout }) => (
  <header className="header-global">
  <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
    <div className="container">
    <Link className="navbar-brand mr-lg-5" to="/">
      <img src="/images/logo_white.png" alt="brand"/>
    </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbar_global">
        <div className="navbar-collapse-header">
          <div className="row">
            <div className="col-6 collapse-brand">
            <Link className="navbar-brand mr-lg-5" to="/">
              <img src="/images/logo.png" alt="brand"/>
            </Link>
            </div>
            <div className="col-6 collapse-close">
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">              
          <li className="nav-item dropdown">
            <a href="#" className="nav-link" data-toggle="dropdown" role="button">
              <i className="ni ni-collection d-lg-none"></i>
                <span className="nav-link-inner--text">{userName}</span>
            </a>
            <div className="dropdown-menu">
              <Link to={`/user/edit/profile/${user_id}`}className="dropdown-item">Editar Perfil</Link>
              <Link to={`/user/edit/projects`} className="dropdown-item">Projetos</Link>
              <Link to="#" className="dropdown-item" onClick={logout}>Logout</Link>
            </div>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
</header> 
);

const mapStateToProps = state => ({
  userName: state.users.fullName,
  user_id: state.users.id
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateHeader);
