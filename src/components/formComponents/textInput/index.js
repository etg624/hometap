import React from 'react'

import useForm from '../../../hooks/useForm'

const TextInput = ({ inputAttributes, onChange }) => {
  const { placeholder, id, value, name, label } = inputAttributes
  return (
    <div>
      <label>{label}</label>
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
