import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export class UserRegisterPersonalDataForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      birthDate: props.user ? moment(props.user.birthDate) : moment(),
      cellPhone: props.user ? props.user.cellPhone : "",
      calendarFocused: null,
      fullName: props.user ? props.user.fullname : "",
      error: "",
      facebook: props.user ? props.user.facebook : "",
      instagram: props.user ? props.user.instagram : "",
      linkedin: props.user ? props.user.linkedin : ""
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

  onFullNameChange = e => {
    const fullName = e.target.value;
    this.setState(() => ({ fullName }));
  };

  onInstagramChange = e => {
    const instagram = e.target.value;
    this.setState(() => ({ instagram }));
  };

  onFacebookChange = e => {
    const facebook = e.target.value;
    this.setState(() => ({ facebook }));
  };

  onLinkedinChange = e => {
    const linkedin = e.target.value;
    this.setState(() => ({ linkedin }));
  };
  onCellPhoneChange = e => {
    const cellPhone = e.target.value;
    this.setState(() => ({ cellPhone }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.fullName) {
      this.setState(() => ({
        error: "Please provide the name input"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        fullName: this.state.fullName,
        birthDate: this.state.birthDate.valueOf(),
        cellPhone: this.state.cellPhone,
        facebook: this.state.facebook,
        instagram: this.state.instagram,
        linkedin: this.state.linkedin
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
          placeholder="Telefone Celular "
          value={this.state.cellPhone}
          onChange={this.onCellPhoneChange}
        />
        <input
          type="facebook"
          placeholder="Facebook "
          value={this.state.facebook}
          onChange={this.onFacebookChange}
        />

        <input
          type="facebook"
          placeholder="Instagram "
          value={this.state.instagram}
          onChange={this.onInstagramChange}
        />
        <input
          type="Linkedin"
          placeholder="Linkedin "
          value={this.state.linkedin}
          onChange={this.onLinkedinChange}
        />

        <div>
          <button>Proximo</button>
        </div>
      </form>
    );
  }
}
