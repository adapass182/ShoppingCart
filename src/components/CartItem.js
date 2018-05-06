import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './CartItem.css'

const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onPlusClick: PropTypes.func.isRequired
})

export default class CartItem extends PureComponent {

  static propTypes = {
    propTypes: productShape.isRequired
  }

  render() {

    const { name, price, onPlusClick, quantity } = this.props

    return (
      <li className="CartItem">
        <p className="name">{name}</p>
        <p className="price">€{price}</p>
        <p className="quantity">Quantity: {quantity}</p>
        <button className="addtocart" onClick={onPlusClick}>Add to Cart</button>
      </li>
    )
  }
}
