import React, { Component } from 'react';
import Clock from 'react-live-clock'

import './App.css'

import CartItem from './components/CartItem'
import CheckoutButton from './components/CheckoutButton'

import './App.css';

const products = [
  {id: 1, name: "GeForce GTX Titan X",price: 999},
  {id: 2, name: "Razer Deathadder 2013", price: 64},
  {id: 3, name: "Blank CD", price: 0.1}
];

const quantity = products.forEach( (product) => product.quantity = 0 )

export default class App extends Component {

  state = {
    products,
    quantity,
    totalHolderText: 'Your cart is empty'
  }

  _incrementQuantity = (productId) => {
    this.setState({
      products: this.state.products.map(product => {
        return product.id === productId ? {...product, ...product.quantity+=1} : product
      })
    })
  }

  totalValue = () => {
    const cartTotal = this.state.products
      .map(product => product.price * product.quantity)
      .reduce((a, b) => a + b)
    this.setState({
      totalHolderText: `Cart total: €${cartTotal}`
    })
  }

  render() {
    return (
      <div className="App">
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Amsterdam'} />
        <ul>
          {this.state.products.map( product =>
            <CartItem
              key={product.id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              onPlusClick={ () => this._incrementQuantity(product.id) }
            />)}
        </ul>
        <CheckoutButton name="Checkout" onClick={this.totalValue}/>
        <p>{this.state.totalHolderText}</p>
      </div>
    );
  }
}
