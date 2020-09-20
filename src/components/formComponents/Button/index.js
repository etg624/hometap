import React from 'react'
import './Button.css'

const Button = ({ disabled, type = 'button', loading, text, modifier, onClick }) => {
  let classList = ''
  if (modifier) {
    classList += `form-button--${modifier}`
  }

  if (loading) {
    classList += ' form-button--is-loading'
  }

  return (
    <button
      onClick={onClick}
      className={`form-button ${classList}`}
      type={type}
      disabled={disabled || loading}
    >
      {loading && <span className="form-button__loading-spinner"></span>}
      <span className="form-button__text">{loading ? 'Loading' : text}</span>
    </button>
  )
}

export default Button
