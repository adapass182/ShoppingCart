import React, { PureComponent } from 'react'
import './CheckoutButton.css'

export default class CheckoutButton extends PureComponent {

  render() {

    const { content } = this.props

    return (
      <button className="CheckoutButton">{content}</button>
    )
  }
}
