import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

export const HeaderNavPrivate =({ logout })=>(
<header className="header-global">
        <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
          <div className="container">
          {/* <Link className="navbar-brand mr-lg-5" to="/">
            <img src="/images/logo.png" alt="brand"/>
          </Link> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                  {/* <Link className="navbar-brand mr-lg-5" to="/">
                    <img src="/images/logo.png" alt="brand"/>
                  </Link> */}
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
                      <span className="nav-link-inner--text">teste</span>
                  </a>
                  <div className="dropdown-menu">
                    <a href="../examples/landing.html" className="dropdown-item">Landing</a>
                    <a href="../examples/profile.html" className="dropdown-item">Profile</a>
                    <a href="../examples/login.html" className="dropdown-item">Login</a>
                    <a href="../examples/register.html" className="dropdown-item">Register</a>
                  </div>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </header> 
)

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(HeaderNavPrivate);

