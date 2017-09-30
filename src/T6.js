import React, {Component} from 'react';

class T6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            like: true,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSpanClick = this.handleSpanClick.bind(this);
    }
    handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
    }
    handleSpanClick() {
        this.setState({
            like: !this.state.like
        });
    }
    render() {
        let like = this.state.like ? 'have liked': 'haven\'t liked';
        return (
            <div>
                <span onClick={this.handleSpanClick}>You {like} this.Click to toggle.</span><br/>
                <input type="button" value= {this.state.isToggleOn ? 'ON':'OFF'} onClick={this.handleClick}/>
            </div>
        );
    }
}

export default T6;