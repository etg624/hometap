import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

const Button = ({ disabled, type = 'button', isLoading, text, modifier, onClick }) => {
  let classList = ''
  if (modifier) {
    classList += `form-button--${modifier}`
  }

  if (isLoading) {
    classList += ' form-button--is-loading'
  }

  return (
    <button
      onClick={onClick}
      className={`form-button ${classList}`}
      type={type}
      disabled={disabled || isLoading}
    >
      {isLoading && <span className="form-button__loading-spinner"></span>}
      <span className="form-button__text">{isLoading ? 'Loading' : text}</span>
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
