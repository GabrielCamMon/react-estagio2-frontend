import React from 'react';
import moment from "moment";
import CardPhoto from './CardPhoto';
import {SingleDatePicker} from "react-dates";

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          address: props.user? props.user.address: "",
          birthDate: props.user ? moment(props.user.birthDate) : moment(),
          photo: props.user? props.user.photo :"/assets/img/theme/team-4-800x800.jpg",
          cellPhone: props.user ? props.user.cellPhone : "",
          calendarFocused: null,
          country:  props.user ? props.user.country:"",
          cpf: props.cpf ? props.user.cpf :"",
          fullName: props.user ? props.user.fullName : "",
          email: props.email ? props.user.email: "",
          genre: props.genre? props.user.genre:"",
          error: "",
          nacionality: props.nacionality ? props.user.nacionality : "",
          number: props.user ? props.user.number : "",
          state: props.user ? props.user.state : "",
          neighbourhood: props.neighbourhood ? props.user.neighbourhood: "",
          city: props.city ? props.user.city: "",
          complement: props.complement ? props.user.complement: "", 
          zipcode: props.user ? props.user.zipcode : "",
          street: props.user ? props.user.street : "",          
          facebook: props.user ? props.user.facebook : "",
          instagram: props.user ? props.user.instagram : "",
          linkedin: props.user ? props.user.linkedin : "",
          contacts: props.user ? props.user.contacts : []
      };
  }



  onFocusChange = ({focused}) => {
      this.setState(() => ({calendarFocused: focused}));
  };

  onDateChange = e => {
    const birthDate= e.target.value
          this.setState(() => ({birthDate}));
  };


  onCPFChange = e => {
    const cpfMask = value => {
      return value
        .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    };
    this.setState({ cpf: cpfMask(e.target.value) });
  };

onCellPhoneChange = e => {
  const cellPhone= e.target.value;
  this.setState(() => ({cellPhone}));
};

onPhotoHandler = evt=>{
  var tgt = evt.target || window.event.srcElement,
  files = tgt.files;
let photo='';
// FileReader support
if (FileReader && files && files.length) {
  console.log(files[0])
  var fr = new FileReader();
  fr.onload = function () {
      photo = fr.result;
      console.log(photo)
  }
  fr.readAsDataURL(files[0]);
}

 this.setState({photo})
}

onNacionalityChange = e => {
  const nacionality= e.target.value;
  this.setState(() => ({nacionality}));
};

onCityChange = e => {
  const city= e.target.value;
  this.setState(() => ({city}));
};

onGenreChange = e => {
  const genre= e.target.value;
  this.setState(() => ({genre}));
};

onAddressChange = e => {
  const address= e.target.value;
  this.setState(() => ({address}));
};

onNumberChange = e => {
  const number= e.target.value;
  this.setState(() => ({number}));
};

onZipCodeChange = e => {
  const zipcode= e.target.value;
  this.setState(() => ({zipcode}));
};

onNeighbourhoodChange = e => {
  const neighbourhood= e.target.value;
  this.setState(() => ({neighbourhood}));
};

onComplementChange = e => {
  const complement= e.target.value;
  this.setState(() => ({complement}));
};
  onFullNameChange = e => {
    const fullName = e.target.value;
    this.setState(() => ({fullName}));
};

onCountryChange= e =>{
  const country = e.target.value;
      this.setState(() => ({country}));
}
  onInstagramChange = e => {
      const instagram = e.target.value;
      this.setState(() => ({instagram}));
  };

  onFacebookChange = e => {
      const facebook = e.target.value;
      this.setState(() => ({facebook}));
  };

  onLinkedinChange = e => {
      const linkedin = e.target.value;
      this.setState(() => ({linkedin}));
  };

  onCellPhoneChange = e => {
      const cellPhone = e.target.value;
      this.setState(() => ({cellPhone}));
  };

  onChangeContacts = () => {
      const contacts = [];

      this.state.facebook && contacts.push({type: "1", value: this.state.facebook});

      this.state.linkedin && contacts.push({type: "2", value: this.state.linkedin});

      this.state.instagram && contacts.push({type: "3", value: this.state.instagram});

      this.state.cellPhone && contacts.push({type: "4", value: this.state.cellPhone});

      return contacts;
  };

  onSubmit = e => {
      e.preventDefault();
      if (!this.state.fullName) {
          this.setState(() => ({error: "Por favor digite os campos em brancos"}));
      } else {
          this.setState(() => ({error: ""}));
          this.props.onSubmit({
            fullName: this.state.fullName, 
            birthDate: this.state.birthDate, 
            contacts: this.onChangeContacts()
            
          });
      }
  };
    render() { 
        return ( 
            <div className="main-content">
  <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center header-default-custom"  >
    {/* <!-- Mask --> */}
    <span className="mask bg-gradient-default opacity-8"></span>
    {/* <!-- Header container --> */}
    <div className="container-fluid d-flex align-items-center">
      <div className="row">
        <div className="col-lg-7 col-md-10">
          <h1 className="display-2 text-white">Olá, {this.state.fullName}</h1>
          <p className="text-white mt-0 mb-5">Esta é a página de edição. Complete todo o cadastro para acessar as funcionalidades da plataforma.</p>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Page content --> */}
  <div className="container-fluid mt--100">
    <div className="row">

      <CardPhoto photo={this.state.photo} onPhotoHandler={this.onPhotoHandler} />

      <div className="col-xl-8 order-xl-1">
        <div className="card bg-secondary shadow">
          <div className="card-header bg-white border-0">
            <div className="row align-items-center">
              <div className="col-8">
                <h3 className="mb-0">Minha Conta</h3>
              </div>
              <div className="col-4 text-right">
                <a href="#!" className="btn btn-sm btn-primary">Salvar</a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <form>
              <h6 className="heading-small text-muted mb-4">Informação do Usuário</h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-fullname">Nome Completo *</label>
                      <input  
                      type="text" 
                      id="input-fullname" 
                      className="form-control form-control-alternative" 
                      placeholder="Escreva o nome completo"
                      formart='DD-MM-YYYY' 
                      value={this.state.fullName}
                      onChange={this.onFullNameChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-birthDate">Digite data de nascimento *</label>
                      
                      <div className="form-control form-control-alternative" >
                      <input type="date"
                      style={{border:"none"}}
                        className="input-group-prepend"
                        onChange={this.onDateChange}
                        value={this.state.birthDate}
                       />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-first-name">Sexo *</label>
                      <select 
                          className="form-control form-control-alternative" 
                          id="inlineFormCustomSelect"
                          value={this.state.genre}
                          onChange={this.onGenreChange}
                      >
                        <option value="" >Genero</option>
                        <option value="M" >Masculino</option>
                        <option value="F">Feminino</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-last-name">CPF *</label>
                      <input 
                      onChange={this.onCPFChange}
                      type="text" 
                      id="input-last-name" 
                      className="form-control form-control-alternative" 
                      placeholder="Digite seu CPF" 
                      value={this.state.cpf}/>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              {/* <!-- Address --> */}
              <h6 className="heading-small text-muted mb-4">Informação de Endereço</h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-md-10">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-address">Endereço</label>
                      <input 
                      onChange={this.onAddressChange}
                      id="input-address" 
                      className="form-control form-control-alternative" 
                      placeholder="Escreva seu endereço" 
                      value={this.state.address}
                      type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-address">Número</label>
                      <input 
                      onChange={this.onNumberChange}
                      id="input-address" 
                      className="form-control form-control-alternative" 
                      placeholder="Número" 
                      value={this.state.number}
                      type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-city">Cidade</label>
                      <input
                      onChange={this.onCityChange} 
                      type="text" 
                      id="input-city" 
                      className="form-control form-control-alternative" 
                      placeholder="Escreva a sua cidade" 
                      value={this.state.city}/>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-country">País</label>
                      <input
                      type="text" 
                      id="input-country" 
                      className="form-control form-control-alternative" 
                      placeholder="Escreva o seu País" 
                      onChange={this.onCountryChange}
                      value={this.state.country}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-country">CEP</label>
                      <input  
                      type="number" 
                      id="input-postal-code" 
                      className="form-control form-control-alternative" 
                      placeholder="Escreva seu CEP"
                      onChange={this.onZipCodeChange}
                      value={this.state.zipcode}
                      />
                    </div>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-address">Bairro</label>
                      <input 
                      onChange={this.onNeighbourhoodChange}
                      id="input-address" 
                      className="form-control form-control-alternative" 
                      placeholder="Escreva seu Bairro" 
                      value={this.state.neighbourhood}
                      type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-address">Complemento</label>
                      <input 
                      onChange={this.onComplementChange}
                      id="input-address" 
                      className="form-control form-control-alternative" 
                      placeholder="Escreva o complemento" 
                      value={this.state.complement}
                      type="text"
                      />
                    </div>
                  </div>
                </div>
               
              </div>
              <hr className="my-4" />
              {/* <!-- Description --> */}
              <h6 className="heading-small text-muted mb-4">Informações de contato</h6>
              <div className="pl-lg-4">
                <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-address">Telefone</label>
                      <input 
                      onChange={this.onCellPhoneChange}
                      id="input-address" 
                      className="form-control form-control-alternative" 
                      placeholder="Escreva telefone celular" 
                      value={this.state.cellPhone}
                      type="tel"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-address">Facebook</label>
                      <input 
                      onChange={this.onFacebookChange}
                      id="input-address" 
                      className="form-control form-control-alternative" 
                      placeholder="Facebook" 
                      value={this.state.facebook}
                      type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-address">Instagram</label>
                      <input 
                      onChange={this.onInstagramChange}
                      id="input-address" 
                      className="form-control form-control-alternative" 
                      placeholder="Instagram" 
                      value={this.state.instagram}
                      type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-address">Linkedin</label>
                      <input 
                      onChange={this.onLinkedinChange}
                      id="input-address" 
                      className="form-control form-control-alternative" 
                      placeholder="Likedin" 
                      value={this.state.linkedin}
                      type="text"
                      />
                    </div>
                  </div>
                </div>
                  {/* <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</div> 
            );
    }
}
 
export default EditProfileForm;