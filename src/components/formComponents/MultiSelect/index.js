import React, { useState } from 'react'
import FormField from '../FormField'
import './MultiSelect.css'

const MultiSelect = ({ options, attributes, setFormData, formData }) => {
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
    <FormField attributes={attributes}>
      <figure className="multi-selects">
        {options.map(option => (
          <div className="multi-selects__select" key={option.value}>
            <input
              type="checkbox"
              checked={checkedItems.get(option.value)}
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

export default MultiSelect
