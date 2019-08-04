import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        // bind this to function callback
        this.handleClick = this.handleClick.bind(this);
    }

    // handle click events
    handleClick() {
        fetch('http://localhost/apis')
            .then(res => res.json())
            .then((result) => {
              console.log('Button: ', result);
            });
    }

    // view rendering
    render() {
        return <input type="button"
            value="Get data from Koa"
            onClick={this.handleClick}/>;
    }
}

export default Button;