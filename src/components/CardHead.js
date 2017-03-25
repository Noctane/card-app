import React, { Component } from 'react';
import CardCategory from './CardCategory';
import street from '../img/street.jpg';
import './CardHead.css';
import {projects} from './Projects';

class CardHead extends Component {

    state = {
        thumb: projects[0].thumbUrl,
    };

    render() {
        return (
            <div className="card--head">
                <div className="card--img">
                    <img src={ this.state.thumb } alt="Street" className="img-responsive"/>
                </div>
                <CardCategory category="Photography" />
            </div>
        );
    }
}

export default CardHead;