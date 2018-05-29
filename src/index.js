import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const userinfo = { firstName : "Milap", lastName : "parikh"}


const name = 'Milap';
const element = <div>Welcome react beginner ==> <span>{userinfo.firstName}</span><span>{userinfo.lastName}</span></div>;



const num1 = 5;
const num2 = 15;
const element2 = <div>display calculator ==> <span>{num1 + num2}</span></div>;

ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(element2, document.getElementById('root1'));


ReactDOM.render(<App/>, document.getElementById('root2'));
