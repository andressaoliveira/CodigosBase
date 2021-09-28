import React from 'react';
import Titulo from '../Titulo/Titulo';
import Foto from '../Foto/Foto';
import Descricao from '../Descricao/Descricao';
import Botao from '../Botao/Botao';
import './Imagem.scss'

export default class Imagem extends React.Component {

    render() {
        const { titulo, descricao, img, onClick, botao } = this.props;
        
        return (
            <div className="imagem">
                <Titulo texto={titulo} />
                <Foto img={img} />
                <Descricao texto={descricao} />
                {botao && <Botao onClick={onClick}>{botao}</Botao>}
            </div>
        );
    }
}
