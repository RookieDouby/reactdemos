import React, {Component} from 'react';

class RepeatedLi extends Component {
    render() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, (child) => (<li>{child}</li>))
                }
            </ol>
        );
    }
}

class T3 extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <RepeatedLi>
                <span>Hello,</span>
                <span>Sam</span>
            </RepeatedLi>
        );
    }
}

export default T3;