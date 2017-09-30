import React, {Component} from 'react';
const names = ["Sam","Tom","John"];

class T1 extends Component {
    render() {
        return (
            <div>
                {
                    names.map((index,name) => <div>Hello, { name }!</div>)
                }
            </div>
        );
    }
}

export default T1;