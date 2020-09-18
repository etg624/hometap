import React from 'react'

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

export default SelectDropdown
