import React from 'react';
import {Link} from 'react-router-dom' 

export const HeaderNavPublic =()=>  (
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
              <Link to='/'>
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
        <ul className="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto nav-size">
          <li className="nav-item dropdown ">
            <Link to="/user/singin" className="nav-link">
              <span className="nav-link-inner--text">Login</span>
            </Link>
          </li>
          <li className="nav-item dropdown" className="nav-link">
            <Link to="/user/create">
              <span className="nav-link-inner--text"> Cadastra-se</span>
              </Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
</header> 
  )

 
export default HeaderNavPublic;