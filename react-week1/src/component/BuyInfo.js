import React, { Component } from 'react';

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

  handleSubmit = (event) => {
    event.preventDefault();
  }
  render(){
    const content = this.props.BuyList.map((BuyInfo, index) => {
      return(
        <div key={BuyInfo.id}>
          <input type="radio" name="select" value={index}/>
          <label>
            Name: {BuyInfo.id}
            <br />
            Goods: {BuyInfo.goods} Price: {BuyInfo.price}
          </label>
        </div> 
      )     
    });
    return (
      <form onSubmit={this.handleSubmit}>
          {content}
      </form>
    )
  }
}

class PageView extends Component{
constructor(props){
  super(props);
  const BuyInfo = [
    {id: "Sam", price: "$49.99", goods: "Football"},
    {id: "Max", price: "$9.99", goods: "Baseball"},
    {id: "Zac", price: "$29.99", goods: "Basketball"}
  ];
  this.state = {BuyInfo}
}
   render(){
    const BuySomething = this.state.BuyInfo;
    
     return(
        <div>
          <ListInfo BuyList={BuySomething} />
        </div>
     )
   };
 }
 
export default PageView; 