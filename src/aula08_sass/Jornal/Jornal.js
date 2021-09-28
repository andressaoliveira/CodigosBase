import logo from './logo.svg';
import React from 'react';
import Noticia from './Noticia/Noticia';
import Titulo from './Titulo/Titulo';
import PainelLeitura from './PainelLeitura/PainelLeitura';
import './Jornal.scss'

export default class Jornal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lerTitulo: '',
            lerDescricao: '',
            lerLink: '',
            lerImg: ''
        }
    }

    lerNoticia = (noticia) => {
        this.setState({
            lerTitulo: noticia.titulo,
            lerDescricao: noticia.descricao,
            lerLink: noticia.link,
            lerImg: noticia.img
        })
    }


    render() {

        const noticias = {
            esportes: [
                {
                    titulo: 'Noticia 1',
                    descricao: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    link: 'https://www.google.com',
                    img: logo,
                },
                {
                    titulo: 'Noticia 2',
                    descricao: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    link: 'https://www.google.com',
                    img: logo,
                },
                {
                    titulo: 'Noticia 3',
                    descricao: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    link: 'https://www.google.com',
                    img: logo,
                },
            ],
            saude: [
                {
                    titulo: 'Noticia 1',
                    descricao: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    link: 'https://www.google.com',
                    img: logo,
                },
                {
                    titulo: 'Noticia 2',
                    descricao: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    link: 'https://www.google.com',
                    img: logo,
                },
                {
                    titulo: 'Noticia 3',
                    descricao: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    link: 'https://www.google.com',
                    img: logo,
                },
            ],
            novelas: [
                {
                    titulo: 'Noticia 1',
                    descricao: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    link: 'https://www.google.com',
                    img: logo,
                },
                {
                    titulo: 'Noticia 2',
                    descricao: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    link: 'https://www.google.com',
                    img: logo,
                },
                {
                    titulo: 'Noticia 3',
                    descricao: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    link: 'https://www.google.com',
                    img: logo,
                },
            ]
        };

        const { lerTitulo, lerDescricao, lerLink, lerImg } = this.state;

        return (
            <div id='jornal'>
                <div id="titulo">
                    <Titulo texto="Meu Jornal" /></div>
                <div id="container">
                    <div id="noticias">
                        <Titulo texto="Noticias" />
                        <div id="sessoes">
                            <div className="sessao" id='esporte'>
                                <Titulo texto="Esporte" />
                                <div className="noticias">
                                    {
                                        noticias.esportes.map((noticia, key) => {
                                            return <Noticia
                                                titulo={noticia.titulo}
                                                descricao={noticia.descricao}
                                                img={noticia.img}
                                                botao="Ver Mais"
                                                onClick={() => this.lerNoticia(noticia)}
                                                key={key}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                            <div className="sessao" id='novela'>
                                <Titulo texto="Novela" />
                                <div className="noticias">
                                    {
                                        noticias.novelas.map((noticia, key) => {
                                            return <Noticia
                                                titulo={noticia.titulo}
                                                descricao={noticia.descricao}
                                                img={noticia.img}
                                                botao="Ver Mais"
                                                onClick={() => this.lerNoticia(noticia)}
                                                key={key}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                            <div className="sessao" id='saude'>
                                <Titulo texto="Saúde" />
                                <div className="noticias">
                                    {
                                        noticias.saude.map((noticia, key) => {
                                            return <Noticia
                                                titulo={noticia.titulo}
                                                descricao={noticia.descricao}
                                                img={noticia.img}
                                                botao="Ver Mais"
                                                onClick={() => this.lerNoticia(noticia)}
                                                key={key}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="painel-leitura">
                        <PainelLeitura
                            img={lerImg}
                            titulo={lerTitulo}
                            descricao={lerDescricao}
                            link={lerLink}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
