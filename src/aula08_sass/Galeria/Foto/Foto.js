import React from 'react';
import './Foto.scss'

export default class Foto extends React.Component {

    render() {
        const { img } = this.props;
        return (
            <div id="foto">
                <img src={img} alt={img} />
            </div>
        );
    }
}