import React, { Component } from 'react';

class ProductCellComponent extends Component {

    // Way 1
    // state = {
    //     numLikes: 10
    // }

    // Way 2 - Scott's Preferred Way
    constructor(props) {
        super(props);

        this.state = {
            numLikes: 10
        }
    }

    plusLikes = () => {
        if(this.state.numLikes >= 20) return;

        this.setState({
            numLikes: this.state.numLikes + 1
        });
    }

    minusLikes = () => {
        if(this.state.numLikes <= 0) return;

        this.setState({
            numLikes: this.state.numLikes - 1
        });
    }

    reset = () => {
        this.setState({
            numLikes: 0
        })
    }

    render() {
        return (
            <div>
                <h4>{this.props.productName}</h4>
                <p>{this.state.numLikes} people like this!</p>
                <button onClick={this.plusLikes}>+</button>
                <button onClick={this.minusLikes}>-</button>
                <button onClick={this.reset}>X</button>
            </div>
        )
    }
}

export default ProductCellComponent;