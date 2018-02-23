import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import './LogginForm.css';
// import LoggingForm from './LogginForm';
// import Calculator  from './LiftingStateUp';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<LoggingForm />, document.getElementById('Loggin') );
// ReactDOM.render(<Calculator  />, document.getElementById('LiftingStateUp'));

// import ListUser from './component/UserInfo';

function ListUser(props){
    const content = props.BuyList.map((BuyInfo) =>
    <div key={BuyInfo.id}>
      <label>
          Name: {BuyInfo.id}
          Goods: {BuyInfo.goods} Price: {BuyInfo.price}          
      </label>
    </div>
    );
    return (
        <div>
            {content}
        </div>
    )
}

const BuyInfo = [
    {id: "Sam", price: "$49.99", goods: "Football"},
    {id: "Max", price: "$9.99", goods: "Baseball"},
    {id: "Zac", price: "$29.99", goods: "Basketball"},
  ];
ReactDOM.render(
    <ListUser BuyList={BuyInfo} />,
    document.getElementById('Array')
);