import React from 'react'
import PropTypes from 'prop-types'

import FormField from '../FormField'

const TextInput = ({ inputAttributes, onChange, error, limit }) => {
  const { id, value, name, label, placeholder } = inputAttributes
  return (
    <FormField attributes={inputAttributes} label={label}>
      <input
        className="form-field__input"
        maxLength={limit}
        type="text"
        placeholder={placeholder}
        id={id}
        value={value || ''}
        name={name}
        onChange={onChange}
      />
    </FormField>
  )
}

TextInput.propTypes = {
  inputAttributes: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default TextInput
