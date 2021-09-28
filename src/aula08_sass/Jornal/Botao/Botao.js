import React from 'react';

export default class Botao extends React.Component {
    render() {
        const { children, onClick, link } = this.props;
        
        return (
            <div>
                {
                    link ?
                        <button><a href={link}>{children}</a></button>
                        :
                        <button onClick={onClick}>{children}</button>
                }
            </div>
        )
    }
}
