import React from 'react'
import PropTypes from 'prop-types'

const SelectDropdown = ({ options, onChange, attributes, error }) => {
  const { id, name, value, placeholder } = attributes
  return (
    <div className={error ? 'form-field form-field--error' : 'form-field'}>
      {attributes.label && <label>{attributes.label}</label>}
      <select onChange={onChange} id={id} name={name} value={value}>
        <option value="" {...(value ? '' : 'selected')} style={{ color: '#d8d8d8' }}>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {error && <label className="form-field--error__label">{error}</label>}
    </div>
  )
}

SelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string.isRequired, text: PropTypes.string.isRequired })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  attributes: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,
  error: PropTypes.string,
}

export default SelectDropdown
