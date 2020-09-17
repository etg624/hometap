import React from 'react'

const TextInput = ({ inputAttributes, onChange }) => {
  const { id, value, name, label, placeholder } = inputAttributes
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        value={value || ''}
        name={name}
        onChange={onChange}
      />
    </div>
  )
}

export default TextInput
