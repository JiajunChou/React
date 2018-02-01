import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import LiftingStateUp from './LiftingStateUp';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<LiftingStateUp />, document.getElementById('LiftingStateUp'));
