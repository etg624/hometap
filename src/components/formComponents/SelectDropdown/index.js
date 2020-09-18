import React from 'react'

const SelectDropdown = ({ options, onChange, attributes }) => {
  return (
    <select onChange={onChange} id={attributes.id} name={attributes.name} value={attributes.value}>
      <option value={attributes.value ? '' : 'selected'}>{attributes.placeholder}</option>
      {options.map(option => (
        <option value={option.value}>{option.text}</option>
      ))}
    </select>
  )
}

export default SelectDropdown
