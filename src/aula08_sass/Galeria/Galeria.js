// import logo from './logo.svg';
import React from 'react';
import Imagem from './Imagem/Imagem';
import Titulo from './Titulo/Titulo';
import './Galeria.scss'

export default class Galeria extends React.Component {
    render() {

        const imagens = {
            pessoas: [
                {
                    titulo: 'imagem 1',
                    descricao: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: 'https://andrecastilho.com/wp-content/uploads/2019/06/adults-blur-business-people-1811991.jpg',
                },
                {
                    titulo: 'imagem 2',
                    descricao: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: 'https://andrecastilho.com/wp-content/uploads/2019/06/adults-blur-business-people-1811991.jpg',
                },
                {
                    titulo: 'imagem 3',
                    descricao: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: 'https://andrecastilho.com/wp-content/uploads/2019/06/adults-blur-business-people-1811991.jpg',
                },
            ],
            animais: [
                {
                    titulo: 'imagem 1',
                    descricao: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: 'https://saude.abril.com.br/wp-content/uploads/2020/07/coronav%C3%ADrus-felinos-selvagens.png?w=680',
                },
                {
                    titulo: 'imagem 2',
                    descricao: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: 'https://saude.abril.com.br/wp-content/uploads/2020/07/coronav%C3%ADrus-felinos-selvagens.png?w=680',
                },
                {
                    titulo: 'imagem 3',
                    descricao: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: 'https://saude.abril.com.br/wp-content/uploads/2020/07/coronav%C3%ADrus-felinos-selvagens.png?w=680',
                },
            ],
            paisagens: [
                {
                    titulo: 'imagem 1',
                    descricao: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: 'https://img.elo7.com.br/product/zoom/2D55940/papel-de-parede-paisagem-campo-arvores-area-verde-gg849-adesivo-campo.jpg',
                },
                {
                    titulo: 'imagem 2',
                    descricao: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: 'https://img.elo7.com.br/product/zoom/2D55940/papel-de-parede-paisagem-campo-arvores-area-verde-gg849-adesivo-campo.jpg',
                },
                {
                    titulo: 'imagem 3',
                    descricao: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: 'https://img.elo7.com.br/product/zoom/2D55940/papel-de-parede-paisagem-campo-arvores-area-verde-gg849-adesivo-campo.jpg',
                },
            ]
        };

        return (
            <div id='galeria'>
                <div id="titulo">
                    <Titulo texto="Minha Galeria" /></div>
                <div id="container">
                    <div id="imagens">
                        <div id="sessoes">
                            <div className="sessao" id='paisagem'>
                                <Titulo texto="Paisagem" />
                                <div className="imagens">
                                    {
                                        imagens.paisagens.map((imagem, key) => {
                                            return <Imagem
                                                titulo={imagem.titulo}
                                                descricao={imagem.descricao}
                                                img={imagem.img}
                                                botao="Ver Mais"
                                                onClick={() => this.lerImagem(imagem)}
                                                key={key}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                            <div className="sessao" id='pessoas'>
                                <Titulo texto="Pessoas" />
                                <div className="imagens">
                                    {
                                        imagens.pessoas.map((imagem, key) => {
                                            return <Imagem
                                                titulo={imagem.titulo}
                                                descricao={imagem.descricao}
                                                img={imagem.img}
                                                botao="Ver Mais"
                                                onClick={() => this.lerImagem(imagem)}
                                                key={key}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                            <div className="sessao" id='animais'>
                                <Titulo texto="Animais" />
                                <div className="imagens">
                                    {
                                        imagens.animais.map((imagem, key) => {
                                            return <Imagem
                                                titulo={imagem.titulo}
                                                descricao={imagem.descricao}
                                                img={imagem.img}
                                                botao="Ver Mais"
                                                onClick={() => this.lerImagem(imagem)}
                                                key={key}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
