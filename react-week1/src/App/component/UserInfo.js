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
        {id: "Max", price: "$9.99", goods: "Baseball"}
      ],
      checked: [true, false]
    }
  };

  handleSelectChange = (event) => {
    if(event === "0") {
      this.setState({
        initIdex: event,       
        checked: [true, false]
      });
    }
    if(event === "1") {
      this.setState({
        initIdex: event,
        checked: [false, true]});
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
            <ModifyUser name={this.state.items[initIndex].id} goods={this.state.items[initIndex].goods} price={this.state.items[initIndex].price}/>
          </div>
      </div>
     )
  };
}
 
export default UserInfo;