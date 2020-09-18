import React from 'react'

import TextInput from '../formComponents/TextInput'
import useForm from '../../hooks/useForm'
import { formAttributes } from './formAttributes'

import validateUserDataForm from './validateForm'

const UserAddressForm = ({ submitForm, httpError }) => {
  const { formData, handleFormInputChange, handleSubmit, errors } = useForm(
    submitForm,
    validateUserDataForm
  )
  const userFormAttributes = formAttributes(formData)

  const inputs = userFormAttributes.map(attrs => (
    <div>
      <TextInput
        key={attrs.id}
        onChange={handleFormInputChange}
        inputAttributes={attrs}
        error={errors[attrs.id]}
      />
    </div>
  ))

  return (
    <form onSubmit={handleSubmit}>
      {inputs}
      {httpError && <div>{httpError}</div>}
      <input type="submit" />
    </form>
  )
}

export default UserAddressForm
