import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css"
// Here we do not need the curly braces as 'Counter' is the 
// 'default' export.
import Counter from "./components/counter"

// NB: Here we are extending the 'html vocabulary' by using the 
// the virtual DOM tag name of our component.
ReactDOM.render(<Counter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
