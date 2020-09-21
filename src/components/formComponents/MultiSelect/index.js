import React, { useState } from 'react'
import FormField from '../FormField'
import PropTypes from 'prop-types'
import './MultiSelect.css'

const MultiSelect = ({ options, attributes, setFormData, formData, error, isRequired }) => {
  const [{ checkedItems }] = useState({ checkedItems: new Map() })
  const handleCheck = ({ target }) => {
    const { name, checked } = target
    const checkbox = name
    const isChecked = checked
    if (isChecked) {
      checkedItems.set(checkbox, isChecked)
      setFormData({ ...formData, [attributes.id]: [...checkedItems.keys()] })
    } else {
      checkedItems.delete(checkbox)
      setFormData({ ...formData, [attributes.id]: [...checkedItems.keys()] })
    }
  }
  return (
    <FormField attributes={attributes} error={error} isRequired={isRequired}>
      <figure className="multi-selects">
        {options.map(option => (
          <div className="multi-selects__select" key={option.value}>
            <input
              type="checkbox"
              checked={checkedItems.get(option.value) || false}
              name={option.value}
              id={option.value}
              onChange={handleCheck}
            />
            <label htmlFor={option.value}>{option.text}</label>
          </div>
        ))}
      </figure>
    </FormField>
  )
}

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.string,
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  isRequired: PropTypes.bool,
  attributes: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
  }).isRequired,
}

export default MultiSelect
