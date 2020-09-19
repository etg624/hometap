import React from 'react'
import PropTypes from 'prop-types'

const SelectDropdown = ({ options, onChange, attributes, error }) => {
  return (
    <div>
      <select
        onChange={onChange}
        id={attributes.id}
        name={attributes.name}
        value={attributes.value}
      >
        <option value={attributes.value ? '' : 'selected'}>{attributes.placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {error && <p>{error}</p>}
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
