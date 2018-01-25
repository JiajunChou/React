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

/**JSX: Greeting */

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

/** Updating the Rendered Element */

function tick(){
    const LocaleTime = (
        <div>
            <h2># Updating the rendered elements</h2>
            <p>What time is it?</p>
            <p>It is {' '}            
                {new Date().toLocaleTimeString()}
            </p>
        </div>
    )

    ReactDOM.render(
        LocaleTime,
        document.getElementById('LocaleTime')
    )
    
};

setInterval(tick, 1000);

/**Compenents and Props: Functional and Class Components */

/**Part1 */
function Welcome(props){
    return <h2>BTW, Do you see {props.name} ?</h2>
}

const Compon_Props = <Welcome name="Sara"/>;

ReactDOM.render(
    Compon_Props,
    document.getElementById('Compon_Props')
)

/**part2 */
function SayHi(props){
    return <h2> Hey, {props.name}</h2>;
}

function Applicate(){
    return(
        <div>
            <SayHi name="Zora" />
            <SayHi name="Nami" />
            <SayHi name="Frank" />
        </div>
    );
}
ReactDOM.render(
    <Applicate />,
    document.getElementById('SayHi')
)

registerServiceWorker();