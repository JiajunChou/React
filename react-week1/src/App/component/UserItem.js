import React from 'react';

class UserItems extends React.Component {

    handleClick = (e) => {
        this.props.onItemsClick(e.target.value);
    };
    render(){
        return (
            <div>
                <h3>                
                <input type="radio" value={this.props.index} checked={this.props.check} onClick={this.handleClick} />{this.props.buyer}
                </h3>           
                <label>
                &nbsp;&nbsp;&nbsp;&nbsp; Goods: {this.props.goods}
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                    Prices: {this.props.prices}
                </label>
            </div>            
        )
    }
}

export default UserItems;