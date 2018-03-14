import React, { Component } from 'react';

class ModifyUser extends Component {
  
  handleChange = (event) =>{
    this.props.onGoodsChange(event.target.value);
    this.props.onPriceChange(event.target.value);
  }
  
  render(){
    const name = this.props.name;
    const goods = this.props.goods;
    const price = this.props.price;
    return(    
      <form>
        <label>
          Name: {name}
        </label>
        <br />
        <label>
          物品:
          <input 
              name="goods" 
              type="text"  
              value={goods} 
              onChange={this.handleChange} />
        </label>                
        <label>
          價格:
          <input 
              name="price" 
              type="text" 
              value={price} 
              onChange={this.handleChange}/>              
        </label>
        <br />        
      </form>
    );
  }
  }

export default ModifyUser;