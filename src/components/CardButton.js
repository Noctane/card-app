import React, {Component} from 'react';
import './CardButton.css';

class CardButton extends Component {

    hello = function () {
        alert('hello');
    };

    render() {
        return (
            <a href="#" onClick={(e) => this.hello(e)} className="CardButton">Click me</a>
        );
    }
}

export default CardButton;