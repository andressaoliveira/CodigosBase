import React from 'react';
import Noticia from '../Noticia/Noticia';
import Titulo from '../Titulo/Titulo';
import './PainelLeitura.scss'

export default class PainelLeitura extends React.Component {

    render() {
        const { titulo, descricao, link, img } = this.props;
        return (
            <div id="painel">
                <Titulo texto="Painel de leitura" tamanho="medio" />
                <Noticia botao='Acessar' img={img} titulo={titulo} descricao={descricao} link={link} />
            </div>
        );
    }
}