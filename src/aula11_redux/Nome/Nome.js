import React from 'react';
//import api from '../infra/api';
import './Nome.scss'

export default class Nome extends React.Component {
  componentDidMount() {
    console.log('montou o Nome')
  }
  componentDidUpdate() {
    console.log('atualizou o Nome')
  }

  render() {
    const {
      nome
    } = this.props;

    return (
      <div className="Nome">
        Nome: <h1>{nome}</h1>
      </div>
    );
  }
}