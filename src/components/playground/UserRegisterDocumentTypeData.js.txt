import React from "react";

class UserRegisterDocumentTypeData extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = e => {
    const target = event.target;
    const typeDocument = target.value;
    this.props.onChangeTypeDocument(typeDocument);
  };
  render() {
    return (
      <div>
        <fieldset>
          <legend>Escolha um tipo de Documento: RG,CNH ou RNE</legend>

          <input
            type="radio"
            name="tDocument"
            id="cRG"
            value="RG"
            defaultChecked
            onChange={this.handleInputChange}
          />
          <label htmlFor="cRG">RG - Registro Geral</label>

          <br />
          <input
            type="radio"
            name="tDocument"
            id="cCNH"
            value="CNH"
            onChange={this.handleInputChange}
          />
          <label htmlFor="cCNH">CNH - Carteira Nacional de Habilitação</label>
          <br />
          <input
            type="radio"
            name="tDocument"
            id="cRNE"
            value="RNE"
            onChange={this.handleInputChange}
          />
          <label htmlFor="cRNE">RNE - Registro Nacional de Estrangeiro</label>
        </fieldset>
      </div>
    );
  }
}

export default UserRegisterDocumentTypeData;
