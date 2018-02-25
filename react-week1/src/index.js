import React from 'react';
import ReactDOM from 'react-dom';
import './App/index.css';
import App from './App/App';

import registerServiceWorker from './App/registerServiceWorker';
registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));