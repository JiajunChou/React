import React, { Component } from 'react';
import ModifyUser from '../component/ModifyUser.js';
import UserItem from '../component/UserItem';

const Items = [
  {id_no: 0, id: "Sam", price: "$49.99", goods: "Football" },
  {id_no: 1, id: "Max", price: "$9.99", goods: "Baseball" },
  {id_no: 2, id: "Zac", price: "$29.99", goods: "Basketball" }
];

class UserInfo extends Component{
  constructor() {
    super();
    this.state = {
      item: Items,
      checked: 0,
      inputValue: '',
      id_index: 0
    };
  };
  
  handleSelect = e => {
    this.setState({ checked: e.target.value });
  }

  handleChange = (e) => {
    this.setState({
        inputValue: e.target.value
    });
  };

  handelPressKey = (e) => {
      if(e.key === 'Enter' ){
          const newObj = [...this.state.item, e.target.value ];
          this.setState({
              item: newObj,
              inputValue: ''
          })
      }
  };
  
  handleRemove = (index) => {
      const oldItem = this.state.item;
      const newObj = oldItem.slice(0, index).concat(oldItem.slice(index+1))
      this.setState({
          item: newObj
      })
  };

  handleItemAttrChange = (newValue, type) => {
    const { item, checked } = this.state;
    const newItems = item.map((ele, index) => {
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
    this.setState({ item: newItems });
  };
  
  render() {
    return (
      <div>
            <div>Name: 
                <input style={{ marginLeft: 16 }} value={this.state.inputValue} type="text" onChange={this.handleChange} onKeyPress={this.state.handelPressKey} />
                <ul>
                {
                    this.state.item.map((value) => {
                        return(                          
                          <UserItem 
                            key={value.id_no}
                            data={value}
                            check={this.state.checked == value.id_no}
                            onItemClick={this.handleSelect}
                            onItemDoubleClick={this.state.handleRemove} />
                            )
                    })
                }
                </ul>              
            </div>
        <h2> Modify Area </h2>
        <div>
          <ModifyUser
            currentSelected={this.state.checked}
            name={this.state.item[this.state.checked].id}
            data={this.state.item[this.state.checked]}
            onGoodChange={this.handleItemAttrChange}
            onPriceChange={this.handleItemAttrChange}
          />
        </div>
      </div>
     )
  };
}

export default UserInfo;
