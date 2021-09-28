import React from 'react';
import './Descricao.scss';

export default class Descricao extends React.Component {

    render() {
        const { texto } = this.props;
        return (
            <div id="descricao">
                <h3>{texto}</h3>
            </div>
        );
    }
}