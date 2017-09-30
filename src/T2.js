import React, { Component } from 'react';

class T2 extends Component {
    render() {
        return(
            <h1>Hello, {this.props.name + ','}</h1>
        )
    }
}

export default T2;