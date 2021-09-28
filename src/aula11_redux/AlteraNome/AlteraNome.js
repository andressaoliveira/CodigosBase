import React from 'react';
//import api from '../infra/api';
import './AlteraNome.scss'

export default class AlteraNome extends React.Component {

  inputChange = event => {
    const { clickButton } = this.props;
    clickButton(event.target.value)
  }
  render() {
    return (
      <div className="AlteraNome">
        AlteraNome:
        <input
          onChange={this.inputChange}
          type='text'
        />
      </div>
    );
  }
}