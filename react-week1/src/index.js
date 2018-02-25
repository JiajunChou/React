import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import './LogginForm.css';
// import LoggingForm from './LogginForm';
// import Calculator  from './LiftingStateUp';
import PageView from './ListInfo';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<LoggingForm />, document.getElementById('Loggin') );
// ReactDOM.render(<Calculator  />, document.getElementById('LiftingStateUp'));

// import ListInfo from './component/UserInfo';

ReactDOM.render(
    <PageView />,
    document.getElementById('Array')
);