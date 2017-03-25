import React, {Component} from 'react';
import './CardCaption.css';
import CardButton from './CardButton';
import {projects} from './Projects';


class CardCaption extends Component {

    state = {
        title: projects[0].title,
        desc: projects[0].desc,
    };

    render() {
        return (
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