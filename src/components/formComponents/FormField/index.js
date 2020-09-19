import React from 'react'
import PropTypes from 'prop-types'

const FormField = ({ attributes, error, children }) => {
  const { id, label } = attributes
  return (
    <div className={error ? 'form-field form-field--error' : 'form-field'}>
      {label && (
        <label className="form-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <label className="form-field--error__label" htmlFor={id}>
          {error}
        </label>
      )}
    </div>
  )
}

FormField.propTypes = {
  inputAttributes: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
  }).isRequired,
  error: PropTypes.string,
}

export default FormField