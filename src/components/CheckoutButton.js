import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './CheckoutButton.css'

const buttonShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
})

export default class CheckoutButton extends PureComponent {

  static propTypes = buttonShape.isRequired

  render() {

    const { name, onClick } = this.props

    return (
      <button onClick={onClick}>{name}</button>
    )
  }
}
