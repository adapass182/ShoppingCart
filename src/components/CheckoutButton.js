import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './CheckoutButton.css'

export default class CheckoutButton extends PureComponent {

  static propTypes = {
    content: PropTypes.string.isRequired
  }

  render() {

    const { content } = this.props

    return (
      <button className="CheckoutButton">{content}</button>
    )
  }
}
