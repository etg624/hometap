import React from 'react'

import TextInput from '../formComponents/TextInput'
import useForm from '../../hooks/useForm'
import { formAttributes } from './formAttributes'

const UserAddressForm = ({ submitForm }) => {
  const { formData, handleFormInputChange, handleSubmit } = useForm(submitForm)
  const userFormAttributes = formAttributes(formData)

  const inputs = userFormAttributes.map(attrs => (
    <TextInput key={attrs.id} onChange={handleFormInputChange} inputAttributes={attrs} />
  ))

  return (
    <form onSubmit={handleSubmit}>
      {inputs}
      <input type="submit" />
    </form>
  )
}

export default UserAddressForm
