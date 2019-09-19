import React from "react";
import uuid from "uuid";

class SingUpDataForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.user ? props.user.email : "",
            password: props.user ? props.user.password : "",
            passwordConfirm: props.user ? props.user.passwordConfirm : "",
            typeOfProfile: ""
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

    onPasswordConfirmChange = e => {
        const passwordConfirm = e.target.value;
        this.setState(() => ({passwordConfirm}));
    };

    onSubmit = e => {
        e.preventDefault();
        if (!this.state.email || !this.state.password || this.state.password.trim() !== this.state.passwordConfirm.trim() || !this.state.typeOfProfile) {
            this.setState(() => ({error: "Please provide the blank inputs"}));
        } else {
            this.setState(() => ({error: ""}));
            this.props.onSubmit({email: this.state.email.trim(), password: this.state.password.trim(), typeOfProfile: this.state.typeOfProfile});
        }
    };
    render() {
        return (<form className="form"
            onSubmit={
                this.onSubmit
        }> {
            this.state.error && <p className="form__error"> {
                this.state.error
            }</p>
        }
            <input type="email" placeholder="Email *" className="text-input"
                value={
                    this.state.email
                }
                onChange={
                    this.onEmailChange
                }/>

            <input type="password" placeholder="Senha *" className="text-input"
                value={
                    this.state.password
                }
                onChange={
                    this.onPasswordChange
                }/>
            <input type="password" placeholder="Confirmar Senha *" className="text-input"
                value={
                    this.state.passwordConfirm
                }
                onChange={
                    this.onPasswordConfirmChange
                }/>
            <fieldset>
                <legend>Escolha um tipo de Usuário:</legend>
                <input type="radio" name="tDocument" id="cInventor" value="1"
                    onChange={
                        this.handleInputChange
                    }/>
                <label htmlFor="cInventor">Sou Inventor</label>

                <br/>
                <input type="radio" name="tDocument" id="cInvestidor" value="2"
                    onChange={
                        this.handleInputChange
                    }/>
                <label htmlFor="cInvestidor">Sou Investidor</label>
            </fieldset>
            <div>
                <button>Proximo</button>
            </div>
        </form>);
    }
}

export default SingUpDataForm;
