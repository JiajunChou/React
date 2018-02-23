import React, { Component } from 'react';

const BuyInfo = [
  {id: "Sam", price: "$49.99", goods: "Football"},
  {id: "Max", price: "$9.99", goods: "Baseball"},
  {id: "Zac", price: "$29.99", goods: "Basketball"},
];

class ListInfo extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const content = this.props.BuyList.map((BuyInfo) =>
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

class Page extends Component{
  render(){
    return(
      <ListInfo BuyList={BuyInfo} />
    )
  };
}

export default Page;
