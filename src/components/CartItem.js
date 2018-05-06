import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './CartItem.css'

export default class CartItem extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  render() {

    const { name, price, id } = this.props

    return (
      <li className="CartItem">
        <p className="name">{name}</p>
        <p className="price">Price: {price}</p>
        <button className="addtocart" onclick={id}>Add to cart</button>
      </li>
    )
  }
}
