import React, { Component } from 'react';
import street from '../img/street.jpg';
import './CardHead.css';

class CardHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: 'Photography'
        };
    }

    render() {
        return (
            <div className="card--head">
                <div className="card--img">
                    <img src={ street } alt="Street" className="img-responsive"/>
                </div>
                <div className="card--categ">
                    { this.state.category }
                </div>
            </div>
        );
    }
}

export default CardHead;