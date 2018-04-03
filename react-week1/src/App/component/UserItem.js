import React, { Component } from 'react';

class UserItem extends Component {
  render(){
    const { id_no, id, price, goods } = this.props.data;
    const { check } = this.props;
    const { onItemClick, onItemDoubleClick } = this.props;
    
    return (
      <div>
        <h3>
          <input type="radio"
            value = {id_no}
            checked={check}
            onChange={onItemClick}
          />
          <label onDoubleClick={() => onItemDoubleClick(id_no)}>{id}</label>
        </h3>
        <label style={{ paddingLeft: 24 }}>
          Goods: {goods}
        </label>
        <label style={{ marginLeft: 16 }}>
          Prices: {price}
        </label>
      </div>
    )
  }
}

export default UserItem;
