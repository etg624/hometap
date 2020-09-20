import React from 'react'
import './Button.css'

const Button = ({ disabled, type, loading, text }) => {
  return (
    <button
      className={`form-button ${loading ? 'form-button--is-loading' : ''}`}
      type={type}
      disabled={disabled || loading}
    >
      {loading && <span class="form-button__loading-spinner"></span>}
      <span class="form-button__text">{text}</span>
    </button>
  )
}

export default Button
