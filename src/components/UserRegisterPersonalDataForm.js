import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export class UserRegisterPersonalDataForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: props.user ? props.user.fullname : "",
      email: props.user ? props.user.email : "",
      cpf: props.user ? props.user.cpf : "",
      birthDate: props.user ? moment(props.user.birthDate) : moment(),
      cellPhone: props.user ? props.user.cellPhone : "",
      calendarFocused: null,
      error: ""
    };
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onDateChange = birthDate => {
    if (birthDate) {
      this.setState(() => ({ birthDate }));
    }
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
  onFullNameChange = e => {
    const fullName = e.target.value;
    this.setState(() => ({ fullName }));
  };
  onEmailChange = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onCellPhoneChange = e => {
    const cellPhone = e.target.value;
    this.setState(() => ({ cellPhone }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.fullName || !this.state.email) {
      this.setState(() => ({
        error: "Please provide fullname and email."
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        fullName: this.state.fullName,
        email: this.state.email,
        birthDate: this.state.birthDate.valueOf(),
        cellPhone: this.state.cellPhone
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Nome Completo *"
          autoFocus
          className="text-input"
          value={this.state.fullName}
          onChange={this.onFullNameChange}
        />
        <input
          type="email"
          placeholder="Email *"
          className="text-input"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          type="text"
          placeholder="CPF *"
          maxLength="14"
          name="cpf"
          value={this.state.cpf}
          onChange={this.onCPFChange}
        />
        <SingleDatePicker
          date={this.state.birthDate}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <input
          type="tel"
          placeholder="Telefone Celular *"
          value={this.state.cellPhone}
          onChange={this.onCellPhoneChange}
        />
        <div>
          <button>Proximo</button>
        </div>
      </form>
    );
  }
}
