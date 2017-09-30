import React,{Component} from 'react';

class T5 extends Component {
    handleClick() {
        this.refs.inputText.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref="inputText"/>
                <input type="button" value="Click to Focus" onClick={this.handleClick.bind(this)} />
            </div>
        );
    }
}

export default T5;