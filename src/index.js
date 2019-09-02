import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from 'components/app/App';
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'index.css';
// Misc.
import * as serviceWorker from 'misc/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
