import React, { Component } from 'react';
import ModifyUser from './ModifyUser';
import UserItem from './UserItem';
import TodoList from './TodoList';

const Items = [
  { id: "Sam", price: "$49.99", goods: "Football" },
  { id: "Max", price: "$9.99", goods: "Baseball" },
  { id: "Zac", price: "$29.99", goods: "Basketball" }
];

class UserInfo extends Component{
  constructor() {
    super();
    this.state = {
      items: Items,
      checked: 0
    };
  };

  handleSelect = index => this.setState({ checked: index });

  handleGoodChange = newValue => {
    const { items, checked } = this.state;
    const newItems = items.map((ele, index) => {
      if(index !== checked)
        return ele;
      return {
        ...ele,
        goods: newValue
      }
    });
    this.setState({ items: newItems });
  }

  handlePriceChange = newValue => {
    const { items, checked } = this.state;
    const newItems = items.map((ele, index) => {
      if(index !== checked)
        return ele;
      return {
        ...ele,
        price: newValue
      }
    })
    this.setState({ items: newItems });
  }
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
            onGoodsChange={this.handleGoodChange}
            onPriceChange={this.handlePriceChange}
          />
        </div>
      </div>
     )
  };
}

export default UserInfo;
