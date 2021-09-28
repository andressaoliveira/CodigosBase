import React from 'react';
import './Imagem.scss'

export default class Imagem extends React.Component {

    render() {
        const { img } = this.props;
        return (
            <div className="imagem">
                <img src={img} alt={img} />
            </div>
        );
    }
}