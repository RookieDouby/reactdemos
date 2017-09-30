import React, {Component} from 'react';
import PropTypes from 'prop-types';

class T4 extends Component {
    // static defaultProps =  {
    //     title: "Sam"
    // };
    // static propTypes = {
    //     title: PropTypes.string.isRequired
    // };

    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

T4.defaultProps = {
    title: 'Sam'
};
T4.propTypes = {
    title: PropTypes.string.isRequired
};

export default T4;