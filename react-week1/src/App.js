import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const content = this.props.BuyList.map((BuyInfo) =>
    <div key={BuyInfo.id}>
      <label>
          Name: {BuyInfo.id}
          Goods: {BuyInfo.goods} Price: {BuyInfo.price}          
      </label>
    </div>
    );
    return(
        <div>
          {content}
        </div>
    )
  }
}

export default App;
