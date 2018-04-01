import React, { Component } from 'react';
import ModifyUser from '../component/ModifyUser.js';
import UserItem from '../component/UserItem';
import TodoList from '../component/TodoList';

const Items = [
  {id_no: 0, id: "Sam", price: "$49.99", goods: "Football" },
  {id_no: 1, id: "Max", price: "$9.99", goods: "Baseball" },
  {id_no: 2, id: "Zac", price: "$29.99", goods: "Basketball" }
];

class UserInfo extends Component{
  constructor() {
    super();
    this.state = {
      items: Items,
      checked: 0,
      id_index: 2
    };
  };

  handleSelect = index => this.setState({ checked: index });

  handleItemAttrChange = (newValue, type) => {
    const { items, checked } = this.state;
    const newItems = items.map((ele, index) => {
      switch (type){
        case "good":
             if(index !== checked)
                 return ele;
             return {
              ...ele,
              goods: newValue
             }
        case "price":
             if(index !== checked)
                 return ele;
             return {
              ...ele,
              price: newValue
             }
        default:
             return {};
      }
    });
    this.setState({ items: newItems });
  };
  

  render() {
    return (
      <div>
        <div>
          <TodoList />
        </div>
        <div>
          {
            this.state.items.map((obj, index) => {
              return (
                <UserItem
                  key={index}
                  index={index}
                  check={this.state.checked === index}
                  buyer={obj.id}
                  data={obj}
                  onItemsClick={this.handleSelect}
                />
              );
            })
          }
        </div>
        <h2> Modify Area </h2>
        <div>
          <ModifyUser
            currentSelected={this.state.checked}
            name={this.state.items[this.state.checked].id}
            data={this.state.items[this.state.checked]}
            onGoodChange={this.handleItemAttrChange}
            onPriceChange={this.handleItemAttrChange}
          />
        </div>
      </div>
     )
  };
}

export default UserInfo;
