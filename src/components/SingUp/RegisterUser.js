import React from "react";
import {Link} from "react-router-dom";


export class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: props.user ? props.user.name : "",
        email: props.user ? props.user.email : "",
        password: props.user ? props.user.password : "",
        typeOfProfile: ""
    };
}
handleInputChange = e => {
    const target = event.target;
    const typeOfProfile = target.value;
    this.setState(() => ({typeOfProfile}));
};
onNameChange = e => {
  const name = e.target.value;
  this.setState(() => ({name}));
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
    if (!this.state.email || !this.state.password  || !this.state.typeOfProfile) {
        this.setState(() => ({error: "Please provide the blank inputs"}));
    } else {
        this.setState(() => ({error: ""}));
        this.props.onSubmit({name:this.state.name.trim(),email: this.state.email.trim(), password: this.state.password.trim(), typeOfProfile: this.state.typeOfProfile});
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
                        <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                      </div>
                      <input 
                        className="form-control" 
                        placeholder="Name" 
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                      />
                    </div>
                  </div>
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
                    <div className="input-group input-group-alternative">
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
                  </div>
                  {/* <div className="text-muted font-italic"><small>password strength: <span className="text-success font-weight-700">strong</span></small></div> */}
                  <legend className="text-legend mt-4 row justify-content-center mb-2">Escolha um tipo de usuário</legend>
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                    <div className="custom-control custom-radio custom-control-inline mb-2">
                      <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input mb-3" value="1" onChange={this.handleInputChange}/>
                      <label className="custom-control-label text-muted" htmlFor="customRadioInline1">Inventor</label>
                    </div>

                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" value="2" onChange={this.handleInputChange}/>
                      <label className="custom-control-label text-muted" htmlFor="customRadioInline2">Investidor</label>
                    </div>
                    </div>
                  </div>
                  
                  <div className="row my-4">
                    <div className="col-12">
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input className="custom-control-input" id="customCheckRegister" type="checkbox"/>
                        <label className="custom-control-label" htmlFor="customCheckRegister"><span>I agree with the <a href="#">Privacy Policy</a></span></label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-primary mt-4" onClick={this.onSubmit}>Create account</button>
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

export default RegisterUser;
