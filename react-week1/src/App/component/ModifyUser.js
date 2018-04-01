import React, { Component } from 'react';

class ModifyUser extends Component {

  render(){
    const { name } = this.props;
    const { goods, price } = this.props.data;
    const { onGoodChange, onPriceChange } = this.props;
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
            onChange={e => onGoodChange(e.target.value, "good")} />
        </label>
        <label>
          價格:
          <input
            name="price"
            type="text"
            value={price}
            onChange={e => onPriceChange(e.target.value, "price")} />
        </label>
        <br />
      </form>
    );
  }
  }

export default ModifyUser;
