import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './CartItem.css'

const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
})

export default class CartItem extends PureComponent {

  static propTypes = {
    onPlusClick: PropTypes.func.isRequired,
    propTypes: productShape.isRequired
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

    const { name, price } = this.props

    return (
      <li className="CartItem">
        <p className="name">{name}</p>
        <p className="price">€{price}</p>
        <button className="addtocart" onClick={() => this._incrementQuantity()}>In cart: {this.state.quantity} </button>
      </li>
    )
  }
}
