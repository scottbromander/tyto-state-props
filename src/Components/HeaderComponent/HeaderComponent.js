import React, { Component } from 'react';
import './HeaderComponent.css';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        // this is the Class
        console.log(this);
        this.state = {
            name: 'Lucas'
        }
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    reset = () => {
        this.setState({
            name: ''
        });
    }

    render() {

        return (
            <div>
                <h1>Hello, {this.state.name}!</h1>
                <p>Cool subtext</p>
                <input onChange={this.handleChange}/>
                <button onClick={this.reset}>RESET</button>
            </div>
        )
    }
}

export default HeaderComponent;