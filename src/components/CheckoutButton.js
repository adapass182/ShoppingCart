import React, { PureComponent } from 'react'

import './CheckoutButton.css'

export default class CheckoutButton extends PureComponent {

  render() {
    return (
      <button className="CheckoutButton">{this.props.content}</button>
    )
  }
}
