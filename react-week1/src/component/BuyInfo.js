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
  constructor(props){
    super(props);    
  }

  handleOptionChange = (event) => {
    this.props.handleSelectChange(event.target.value);
    event.preventDefault();
  }
  render(){
    const content = this.props.BuyList.map((BuyInfo) => {
      return(
        <div key={BuyInfo.id}>
          <input type="radio" name="select" value={BuyInfo.id} checked={this.props.selectedOption === BuyInfo.id} onChange={this.handleOptionChange} />
          <label>
            Name: {BuyInfo.id}
            <br />
            Goods: {BuyInfo.goods} Price: {BuyInfo.price}
          </label>
        </div> 
      )     
    });
    return (
      <div>
          {content}
      </div>
    )
  }
}

class PageView extends Component{
  constructor(props){
    super(props);
    this.state = {idx: 0};  
  };

  handleModifyChange = (idx) => {
    this.setState({idx: 1});
  }

   render(){
    const BuySomething = this.props.BuyInfo;
    const idx = this.state.idx;
    var person = "";
    if ((idx % 2) === 0) {
      person = "Sam";
    } else {
      person = "Max";
    }
    const good = person === "Sam" ? BuySomething[0].goods : BuySomething[1].goods;
    const price = person === "Sam" ? BuySomething[0].price : BuySomething[1].price;
    
     return(
        <div>
          <Modify name={person} goods={good} price={price} />
          <ListInfo BuyList={BuySomething} selectedOption={person} handleSelectChange={this.handleModifyChange} />
        </div>
     )
   };
 }
 
export default PageView;