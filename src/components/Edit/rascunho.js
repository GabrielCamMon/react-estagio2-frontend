import React from 'react';

class racunho extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <main className="profile-page">
            <section className="section-profile-cover section-shaped my-0">
             
              <div className="shape shape-style-1 shape-primary alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              
            </section>
            <section className="section">
              <div className="container">
                <div className="card  shadow mt--300">
                  <div className="px-4">
                    <div className="row ">
                      <div className="col-lg-1 order-lg-1">
                       
                      </div>
                    </div>
                <form className="form container mt-5" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <div className="row justify-content-md-center mb-5">
                    <div className="col col-lg-10">
                        <div className="card-body bg-secondary shadow ">
                            <div className="mb-2">Escreva seu nome completo</div>
                                <input type="text" placeholder="Nome Completo *" autoFocus className="form-control"
                                    value={
                                        this.state.fullName
                                    }
                                    onChange={
                                        this.onFullNameChange
                                    }/>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-md-center mb-5">
                    <div className="col col-lg-10">
                        <div className="card-body bg-secondary shadow">
                            <div className="mb-2">Data de Nascimento</div>
                            <SingleDatePicker date={
                                    this.state.birthDate
                                }
                            
                                onDateChange={
                                    this.onDateChange
                                }
                                focused={
                                    this.state.calendarFocused
                                }
                                onFocusChange={
                                    this.onFocusChange
                                }
                                numberOfMonths={1}
                                isOutsideRange={
                                    () => false
                                }/>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-md-center mb-5">
                    <div className="col col-lg-10">
                        <div className="card-body bg-secondary shadow ">
                            <div className="mb-2">Escreva seu telefone</div>
                            <input type="tel" placeholder="Telefone Celular "
                                value={
                                    this.state.cellPhone
                                }
                                onChange={
                                    this.onCellPhoneChange
                                }/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center mb-5">
                    <div className="col col-lg-10">
                        <div className="card-body bg-secondary shadow ">
                            <div className="mb-2">Escreva seu Facebook</div>
                            <input placeholder="Facebook "
                                value={
                                    this.state.facebook
                                }
                                onChange={
                                    this.onFacebookChange
                                }/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center mb-5">
                    <div className="col col-lg-10">
                        <div className="card-body bg-secondary shadow ">
                            <div className="mb-2">Escreva seu Instagram</div>
                            <input type="facebook" placeholder="Instagram "
                                value={
                                    this.state.instagram
                                }
                                onChange={
                                    this.onInstagramChange
                                }/>
                        </div>
                    </div>
                </div>
               
                <div className="row justify-content-md-center mb-5">
                    <div className="col col-lg-10">
                        <div className="card-body bg-secondary shadow ">
                            <div className="mb-2">Escreva seu Linkedin</div>
                            <input type="Linkedin" placeholder="Linkedin "
                                value={
                                    this.state.linkedin
                                }
                                onChange={
                                    this.onLinkedinChange
                                }/>
                        </div>
                    </div>
                </div>
                              

                <div>
                    <button onClick={
                        this.onChangeContacts
                    }>Proximo</button>
                </div>
              
            </form>
                   
                  </div>
                </div>
              </div>
            </section>
          </main>
          );
    }
}
 
export default racunho;