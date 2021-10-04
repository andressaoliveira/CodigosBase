import React from 'react';
import api from '../infra/api';
import './Aula10.scss'

export default class Aula10 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      digimonsOriginal: [],
      digimons: []
    }
  }

  componentDidMount() {
    api.get("/digimon")
      .then((response) => this.setDigimons(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }

  setDigimons(dados) {
    this.setState({
      digimonsOriginal: dados,
      digimons: dados
    })
  }

  pesquisar(item) {
    const { digimonsOriginal } = this.state;
    const filter = digimonsOriginal.filter(digimon => (digimon.name.toLowerCase()).includes(item.toLowerCase()))
    this.setState({
      digimons: filter
    })
  }

  render() {
    const { digimons } = this.state;

    return (
      <div id="digimons-page">
        <div>
          Pesquisar: <input onChange={(e) => this.pesquisar(e.target.value)} />
        </div>
        <h1> Digimons:</h1>
        <ul>
          {digimons.map((item, index) => (
            <li key={index}>
              <p><b>Nome:</b> {item.name}</p>
              <p><b>Nível:</b> {item.level}</p>
              <p><img className="digimon" src={item.img} alt={item.name} /></p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}