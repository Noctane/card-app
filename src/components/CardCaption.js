import React, { Component } from 'react';
import './CardCaption.css';
import CardButton from './CardButton';

class CardCaption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Street',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem rem ratione culpa adipisci ullam.'
        };
    }

    render() {
        return(
            <div className="card--caption">
                <h3>{ this.state.title }</h3>
                <hr/>
                <p>{ this.state.desc }</p>
                <CardButton/>
            </div>
        );
    }
}

export default CardCaption;