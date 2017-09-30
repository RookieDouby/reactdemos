import React, {Component} from 'react';

class T7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Hello"
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    render() {
        let value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <span>{value}</span>
            </div>
        );
    }
}

export default T7;