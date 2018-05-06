import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './CartItem.css'

export default class CartItem extends PureComponent {
  static propTypes = {
    onPlusClick: PropTypes.func.isRequired
  }
  render() {

    const { name, price, onPlusClick } = this.props

    return (
      <li className="CartItem">
        <p className="name">{name}</p>
        <p className="price">Price: {price}</p>
        <button className="addtocart" onClick={onPlusClick}>Add to cart</button>
      </li>
    )
  }
}
