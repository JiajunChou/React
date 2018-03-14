import React, { Component } from 'react';
import ModifyUser from './ModifyUser';
import UserItem from './UserItem';

class UserInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      initIdex: "0",
      items: [
        {id: "Sam", price: "$49.99", goods: "Football"},
        {id: "Max", price: "$9.99", goods: "Baseball"},
        {id: "Zac", price: "$29.99", goods: "Basketball"}
      ],
      checked: [true, false, false]
    }
  };

  handleSelectChange = (event) => {
    if(event === "0") {
      this.setState({
        initIdex: event,       
        checked: [true, false, false]
      });
    }
    if(event === "1") {
      this.setState({
        initIdex: event,
        checked: [false, true, false]});
    }
    if(event === "2") {
      this.setState({
        initIdex: event,
        checked: [false, false, true]});
    }  
  }

  handleGoodChange = (event) => {
    if(this.state.initIdex === "0"){
      this.setState({
        items: [
          {id: "Sam", price: "$49.99", goods: event},
          {id: "Max", price: "$9.99", goods: "Baseball"},
          {id: "Zac", price: "$29.99", goods: "Basketball"}
        ]        
      });
    } else if(this.state.initIdex === "1"){
      this.setState({
        items: [
          {id: "Sam", price: "$49.99", goods: "Football"},
          {id: "Max", price: "$9.99", goods: event},
          {id: "Zac", price: "$29.99", goods: "Basketball"}
        ]        
      });
    } else if(this.state.initIdex === "2"){
      this.setState({
        items: [
          {id: "Sam", price: "$49.99", goods: "Football"},
          {id: "Max", price: "$9.99", goods: "Baseball"},
          {id: "Zac", price: "$29.99", goods: event}
        ]        
      });
    }
  }

  handlePriceChange = (event) => {
    if(this.state.initIdex === "0"){
      this.setState({
        items: [
          {id: "Sam", price: event, goods: "Football"},
          {id: "Max", price: "$9.99", goods: "Baseball"},
          {id: "Zac", price: "$29.99", goods: "Basketball"}          
        ]        
      });
    } else if(this.state.initIdex === "1"){
      this.setState({
        items: [
          {id: "Sam", price: "$49.99", goods: "Football"},
          {id: "Max", price: event, goods: "Baseball"},
          {id: "Zac", price: "$29.99", goods: "Basketball"}
        ]        
      });
    } else if(this.state.initIdex === "2"){
      this.setState({
        items: [
          {id: "Sam", price: "$49.99", goods: "Football"},
          {id: "Max", price: "$9.99", goods: "Baseball"},
          {id: "Zac", price: event, goods: "Basketball"}
        ]        
      });
    }
  }

  render(){
    const initIndex = this.state.initIdex;
     return(
      <div>
          <div>
          {
            this.state.items.map((obj, index) =>{
              return <UserItem key={index} buyer={obj.id} goods={obj.goods} prices={obj.price} index={index}   check={this.state.checked[index]} onItemsClick={this.handleSelectChange} />
            })
          }
          </div>
          <h2> Modify Area </h2>
          <div>
            <ModifyUser name={this.state.items[initIndex].id} goods={this.state.items[initIndex].goods} price={this.state.items[initIndex].price} onGoodsChange={this.handleGoodChange} onPriceChange={this.handlePriceChange} />
          </div>
      </div>
     )
  };
}
 
export default UserInfo;