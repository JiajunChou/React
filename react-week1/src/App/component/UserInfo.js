import React, { Component } from 'react';
import ModifyUser from './ModifyUser';
import UserItem from './UserItem';

class UserInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      initValue:'',
      items: [
        {id: "Sam", price: "$49.99", goods: "Football"},
        {id: "Max", price: "$9.99", goods: "Baseball"}
      ],
      checked: [true, false]
    }
  };

  handleSelectChange = (event) => {
    if(event === "0") this.setState({checked: [true, false]});
    if(event === "1") this.setState({checked: [false, true]});
  }

  render(){
     return(
        <div>
        {
          this.state.items.map((obj, index) =>{
            return <UserItem key={index} buyer={obj.id} goods={obj.goods} prices={obj.price} index={index} check={this.state.checked[index]} onItemsClick={this.handleSelectChange} />
          })
        }
        </div>
     )
  };
}
 
export default UserInfo;