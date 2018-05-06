import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './CartItem.css'

export default class CartItem extends PureComponent {

  static propTypes = {
    onPlusClick: PropTypes.func.isRequired,
  }

  state = {
    quantity: 0
  }

  _incrementQuantity() {
    this.setState((prevState, props) => {
      return { quantity: prevState.quantity + 1 }
    });
  }

  render() {

    return (
      <li className="CartItem">
        <p className="name">{this.props.name}</p>
        <p className="price">€{this.props.price}</p>
        <button className="addtocart" onClick={() => this._incrementQuantity()}>In cart: {this.state.quantity} </button>
      </li>
    )
  }
}
