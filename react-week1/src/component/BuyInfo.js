import React, { Component } from 'react';

class Modify extends Component {
constructor(props){
  super(props);
}

handleChange = (event) =>{
  this.props.onGoodsChange(event.target.value);
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
        <input name="goods" type="text"  value={goods} onChange={this.handleChange} />
      </label>                
      <label>
        價格:
        <input name="price" type="text" value={price} onChange={this.handleChange}/>
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
  this.state = {BuyInfo};  
}

handleGoodsChange(){
  this.setState({name:form.select.value, good: BuySomething[form.select.value].goods});
}

handlePriceChange(){
  this.setState({name:form.select.value,price: BuySomething[form.select.value].price});
}

   render(){
    const BuySomething = this.state.BuyInfo;
    const name = "0";
    const person = name === '0' ? 'Sam': name === '1' ? 'Max' : 'Zac'; 
    const good = person === "Sam" ? BuySomething[0].goods : person === "Max" ? BuySomething[1].goods : BuySomething[2].goods;
    const price = person === "Sam" ? BuySomething[0].price : person === "Max" ? BuySomething[1].price : BuySomething[2].price;
    
     return(
        <div>
          <Modify name={person} goods={good} price={price} handleChangeGood={this.handleGoodsChange} handleChangePrice={this.handlePriceChange} />
          <ListInfo BuyList={BuySomething} />
        </div>
     )
   };
 }
 
export default PageView; 