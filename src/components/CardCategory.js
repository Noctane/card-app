import React, { Component } from 'react';

class CardCategory extends Component {

    render() {
        return (
            <div className="card--categ">
                {this.props.category}
            </div>
        );
    }
}

export default CardCategory;