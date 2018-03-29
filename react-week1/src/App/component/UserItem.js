import React, { Component } from 'react';

class UserItem extends Component {
  render(){
    const { price, goods } = this.props.data;
    return (
      <div>
        <h3>
          <input type="radio"
            checked={this.props.check}
            onChange={() => this.props.onItemsClick(this.props.index)}
          />
          <label onDoubleClick={() => this.props.onItemDoubleClick(this.props.index)}>{this.props.buyer}</label>
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
