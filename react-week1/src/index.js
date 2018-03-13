import React from 'react';
import ReactDOM from 'react-dom';
import PageView from './component/BuyInfo'

// const BuyInfo = [
//     {id: "Sam", price: "$49.99", goods: "Football"},
//     {id: "Max", price: "$9.99", goods: "Baseball"},
//     {id: "Zac", price: "$29.99", goods: "Basketball"}
//   ];
  const BuyInfo = [
    {id: "Sam", price: "$49.99", goods: "Football"},
    {id: "Max", price: "$9.99", goods: "Baseball"}
  ];


ReactDOM.render(<PageView BuyInfo={BuyInfo}/>, document.getElementById('root'));