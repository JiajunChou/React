import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Calculator  from './LiftingStateUp';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Calculator  />, document.getElementById('LiftingStateUp'));
