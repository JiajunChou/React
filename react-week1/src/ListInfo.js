import React, { Component } from 'react';

const BuyInfo = [
  {id: "Sam", price: "$49.99", goods: "Football"}
  // ,{id: "Max", price: "$9.99", goods: "Baseball"},
  // {id: "Zac", price: "$29.99", goods: "Basketball"},
];

class Modify extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Sam",
      goods: "Football",
      price: "$49.99"
    }
  }

  handleChangeGood = (event) =>{
    this.props.onGoodsChange(event.target.value);
  }

  handleChangePrice = (event) =>{
    this.props.onPriceChange(event.target.value);
  }

  render(){
    const name = this.props.name;
    const goods = this.props.goods;
    const price = this.props.price;
    return(
    <div>
      <form>
        <label>
          Name: {name}
        </label>
        <br />
        <label>
          物品:
          <input name="goods" type="text"  value={goods} onChange={this.handleChangeGood} />
        </label>                
        <label>
          價格:
          <input name="price" type="text" value={price} onChange={this.handleChangePrice}/>
        </label>
        <br />        
      </form>
    </div>
    );
  }
}

class ListInfo extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const content = this.State.x.map((BuyInfo) =>
    <div key={BuyInfo.id}>
      <label>
        <input type="radio" name="select" value={BuyInfo.id} checked /> 
          Name: {BuyInfo.id} <br />
          Goods: {BuyInfo.goods}; Price: {BuyInfo.price}          
      </label>
    </div>
    );
    return(
        <form>
          {content}
        </form>
    )
  }
}

class PageView extends Component{
  constructor(props){
    super(props);
    this.State={
      x: this.porps.BuyList
    };
  }
  render(){
    const BuyInfo = [
      {id: "Sam", price: "$49.99", goods: "Football"}
      // ,{id: "Max", price: "$9.99", goods: "Baseball"},
      // {id: "Zac", price: "$29.99", goods: "Basketball"},
    ];
    return(
      <div>
        <Modify name={this.state.x.name} goods={this.state.x.goods} price={this.state.x.price} />
        <br />
        <ListInfo BuyList={this.state.x} onGoodsChange={this.state.goods} onPriceChange={this.state.price}/>
      </div>
    )
  };
}

export default PageView;