import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import T1 from './T1';
import T2 from './T2';
import T3 from './T3';
import T4 from './T4';
import T5 from './T5';
import T6 from './T6';
import T7 from './T7';

const names=["Sam", "Tim","Jack"];
const numForT4 = 1234;

ReactDom.render(
    <App />,
    document.getElementById('root')
);

ReactDom.render(
    <T1 />,
    document.getElementById('t1')
);

ReactDom.render(
    <T2 name={names} />,
    document.getElementById('t2')
);

ReactDom.render(
    <T3/>,
    document.getElementById('t3')
);
ReactDom.render(
    <T4 title={numForT4}  />,
    document.getElementById('t4')
);

ReactDom.render(
    <T5 />,
    document.getElementById('t5')
);

ReactDom.render(
    <T6 />,
    document.getElementById('t6')
);

ReactDom.render(
    <T7 />,
    document.getElementById('t7')
);