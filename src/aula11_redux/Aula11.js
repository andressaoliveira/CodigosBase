import React from 'react';
import './Aula11.scss'
import { Nome } from './Nome';
import { AlteraNome } from './AlteraNome';

export default class Aula11 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inputValue: '' }
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { clickButton, newValue } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="Aula11">
        <input
          onChange={this.inputChange}
          type='text'
          value={inputValue}
        />
        <button onClick={() => clickButton(inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>
        <Nome />
        <AlteraNome />
      </div>
    );
  }
}