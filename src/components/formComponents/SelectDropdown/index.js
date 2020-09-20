import React from 'react'
import PropTypes from 'prop-types'

import FormField from '../FormField'

const SelectDropdown = ({ options, onChange, attributes, error, isRequired }) => {
  const { id, name, value, placeholder } = attributes

  return (
    <FormField attributes={attributes} error={error} isRequired={isRequired}>
      <select onChange={onChange} id={id} name={name} value={value}>
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </FormField>
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
