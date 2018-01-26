import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
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

/** Extract Component */
function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props){
    return(
        <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
    );
}

function UserInfo(props) {
    return(
        <div className="UserInfo">        
          <Avatar author={props.author}/>
          <div className="UserInfo-name">{props.author.name}</div>
        </div>        
    )
}

function CommentText(props){
    return(
        <div className="Comment-text">
          {props.text}
        </div>
    );
}

function Comment(props) {
  return (
    <div className="Comment">
      {UserInfo(props)}
      {CommentText(props)}
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text:
    'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl:
      'http://placekitten.com/g/64/64',
  },
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('Extract_Compon')
);

/** State and Lifecycle */

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }    
    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    render(){
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    };
}

ReactDOM.render(
    <Clock />,
    document.getElementById('Clock')
)


/**Handling Events */

function ActionLink(){
    function HandleClick(e){
        e.preventDefault();
        console.log('The link was clicked.');
    }
    return(
        <a href="#" onClick={HandleClick}>
          Click me
        </a>
    )
}

ReactDOM.render(
    <ActionLink />,
    document.getElementById('ClickHref')
)

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState( prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return(
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON':'Off'}
          </button>
        );
    }

}

ReactDOM.render(
    <Toggle />,
    document.getElementById("Toggle")
)

/**Loggin Forms */

class Loggin extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                  Account: 
                  <input type="text" value={this.state.value} onChange={this.handleChange}/>
              </label>
              <input type="submit" value="submit" />
            </form>
        )        
    }
}
ReactDOM.render(
    <Loggin />,
    document.getElementById('Loggin')
)