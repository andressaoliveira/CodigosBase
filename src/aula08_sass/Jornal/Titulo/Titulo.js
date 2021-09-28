import React from 'react';

export default class Titulo extends React.Component {

    render() {
        const { texto } = this.props;
        return (
            <div>
                <h1>{texto}</h1>
            </div>
        );
    }
}