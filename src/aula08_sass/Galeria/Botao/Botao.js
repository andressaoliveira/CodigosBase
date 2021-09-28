import React from 'react';
import './Botao.scss'

export default class Botao extends React.Component {
    render() {
        const { children, onClick } = this.props;

        return (
            <div id="botao">
                <button onClick={onClick}>{children}</button>
            </div>
        )
    }
}
