import React, { Component } from 'react';

class UserItems extends Component {
  render(){
    const { price, goods } = this.props.data;
    return (
      <div>
        <h3>
          <input type="radio"
            checked={this.props.check}
            onChange={() => this.props.onItemsClick(this.props.index)}
          />
          {this.props.buyer}
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

export default UserItems;
