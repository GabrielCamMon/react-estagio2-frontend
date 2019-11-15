import React from "react";
import {Link} from "react-router-dom";


export class SingIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: props.user ? props.user.email : "",
        password: props.user ? props.user.password : ""
    };
}
handleInputChange = e => {
    const target = event.target;
    const typeOfProfile = target.value;
    this.setState(() => ({typeOfProfile}));
};
onEmailChange = e => {
    const email = e.target.value;
    this.setState(() => ({email}));
};
onPasswordChange = e => {
    const password = e.target.value;
    this.setState(() => ({password}));
};


onSubmit = e => {
  console.log()
    e.preventDefault();
    if (!this.state.email || !this.state.password ) {
        this.setState(() => ({error: "Please provide the blank inputs"}));
    } else {
        this.setState(() => ({error: ""}));
        this.props.onSubmit({email: this.state.email.trim(), password: this.state.password.trim()});
    }
};
  render() {
    return (
      <main>
    <section className="section section-shaped section-lg">
      <div className="shape shape-style-1 bg-gradient-custom">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="container pt-lg-md">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card bg-secondary shadow border-0">
              
              <div className="card-body px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-3">
                    <Link to="/"><img className="img-logo" src="/images/logo.png"/></Link>
                </div>
                <form onSubmit={this.onSubmit}>

                {this.state.error && <p className="form__error"> {this.state.error} </p>}
                  <div className="form-group">
                    <div className="input-group input-group-alternative mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                      </div>
                      <input 
                        className="form-control" 
                        placeholder="Email" 
                        type="email"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                        />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-alternative mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                      </div>
                      <input 
                        className="form-control" 
                        placeholder="Password" 
                        type="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                      />
                    </div>
                    <small className="mt--4">Não tenho  <Link to={"/user/create"}>cadastro</Link>.</small>
                  </div>
                  
                     
           

                  <div className="text-center">
                    <button type="button" className="btn btn-primary mt-4" onClick={this.onSubmit}>Login</button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    )
  }
}

export default SingIn;
