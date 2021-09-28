import React from 'react';
import './Titulo.scss'

export default class Titulo extends React.Component {

    render() {
        const { texto } = this.props;
        return (
            <div id="titulo">
                <h1>{texto}</h1>
            </div>
        );
    }
}