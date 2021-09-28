import React from 'react';
import IMC from './IMC/IMC';

export default class Aula06 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sexo: null,
      idade: null,
      peso: null,
      altura: null,
    };
  }

  changeNome(novoNome) {
    this.setState({ nome: novoNome });
  }
  changeSexo(novaSexo) {
    this.setState({ sexo: novaSexo });
  }

  changeIdade(novaIdade) {
    this.setState({ idade: novaIdade });
  }

  changePeso(novoPeso) {
    this.setState({ peso: novoPeso });
  }

  changeAltura(novoAltura) {
    this.setState({ altura: novoAltura });
  }

  render() {
    const { nome, sexo, idade, peso, altura } = this.state;
    return (
      <div>
        <h1>Dados:</h1>
        <div>
          <label>Nome:</label>
          <input
            onChange={(e) => this.changeNome(e.target.value)}
          />
        </div>

        <div>
          <label>Sexo:</label>
          <input type="radio" name="sexo" value="Feminino" onChange={(e) => this.changeSexo(e.target.value)} /> Feminino
          <input type="radio" name="sexo" value="Masculino" onChange={(e) => this.changeSexo(e.target.value)} /> Masculino
        </div>

        <div>
          <label>Idade:</label>
          <input
            onChange={(e) => this.changeIdade(e.target.value)}
          />
        </div>

        <div>
          <label>Peso:</label>
          <input
            onChange={(e) => this.changePeso(e.target.value)}
          />
        </div>

        <div>
          <label>Altura:</label>
          <input
            onChange={(e) => this.changeAltura(e.target.value)}
          />
        </div>

        <div id="resultado-formulario">
          <h1>Resultado</h1>
          <div>Nome: {nome}</div>
          <div>Sexo: {sexo}</div>
          <div>Idade: {idade}</div>
          <div>Peso: {peso}</div>
          <div>Altura: {altura}</div>
        </div>

        <IMC sexo={sexo} peso={peso} altura={altura} />
      </div >
    )
  }
}
