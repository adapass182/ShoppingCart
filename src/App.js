import React, { Component } from 'react';
import Clock from 'react-live-clock'

import './App.css'

import CartItem from './components/CartItem'
import CheckoutButton from './components/CheckoutButton'

import './App.css';

const products = [
  {id: 1, name: "GeForce GTX Titan X", quantity: 0, price: 999},
  {id: 2, name: "Razer Deathadder 2013", quantity: 0, price: 64},
  {id: 3, name: "Blank CD", quantity: 0, price: 0.1}
];

export default class App extends Component {

  state = { products }



  render() {
    return (
      <div className="App">
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Amsterdam'} />
        <ul>
          {products.map((product, index) => <CartItem key={index} { ...product } />)}
        </ul>
        <CheckoutButton content="Checkout" />
      </div>
    );
  }
}
