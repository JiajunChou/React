import React, { Component } from 'react';

class ListInfo extends Component {
    render(){
        const content = props.BuyList.map((BuyInfo) =>
        <div key={BuyInfo.id}>
          <label>
              Name: {BuyInfo.id}
              Goods: {BuyInfo.goods} Price: {BuyInfo.price}          
          </label>
        </div>
        );
        return(
            <div>
            {content}
        </div>
        )
    }
}

export default ListInfo;