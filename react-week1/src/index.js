import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/**Hello World */
ReactDOM.render(
    <h1>Hello, 
    Big PIRATE ERA</h1>,
    document.getElementById('Hello_World')
);

/** Greeting */

function formatName(someone){
    return someone.firstName + '.D.' + someone.lastName;
}

const person1 = {
    firstName: 'Monkey',
    lastName: 'Luffe'
}

const Greeting = (
    <h2>
        Good Morning, {formatName(person1)}
    </h2>
)

ReactDOM.render(
    Greeting,
    document.getElementById('Greeting')
)

registerServiceWorker();