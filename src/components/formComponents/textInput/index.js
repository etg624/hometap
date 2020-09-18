import React from 'react'

const TextInput = ({ inputAttributes, onChange, error, limit }) => {
  const { id, value, name, label, placeholder } = inputAttributes
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        maxLength={limit}
        type="text"
        placeholder={placeholder}
        id={id}
        value={value || ''}
        name={name}
        onChange={onChange}
      />
      {error && <label htmlFor={id}>{error}</label>}
    </div>
  )
}

export default TextInput
