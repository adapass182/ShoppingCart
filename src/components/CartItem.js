import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import CheckoutButton from './CheckoutButton'

import './CartItem.css'

const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onPlusClick: PropTypes.func.isRequired
})

export default class CartItem extends PureComponent {

  static propTypes = productShape.isRequired

  render() {

    const { name, price, onPlusClick, quantity } = this.props

    return (
      <li className="CartItem">
        <p className="name">{name}</p>
        <p className="price">€{price}</p>
        <p className="quantity">Quantity: {quantity}</p>
        <CheckoutButton onClick={onPlusClick} name="+" />
      </li>
    )
  }
}
