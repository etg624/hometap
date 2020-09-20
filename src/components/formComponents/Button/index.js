import React from 'react'
import './Button.css'

const Button = ({ disabled, type, loading, text, modifier }) => {
  let classList = ''
  if (modifier) {
    classList += `form-button--${modifier}`
  }

  if (loading) {
    classList += ' form-button--is-loading'
  }

  return (
    <button className={`form-button ${classList}`} type={type} disabled={disabled || loading}>
      {loading && <span className="form-button__loading-spinner"></span>}
      <span className="form-button__text">{text}</span>
    </button>
  )
}

export default Button
