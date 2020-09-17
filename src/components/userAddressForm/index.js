import React from 'react'

import TextInput from '../formComponents/TextInput'
import useForm from '../../hooks/useForm'
import { formAttributes } from './formAttributes'

const UserAddressForm = ({ submitForm }) => {
  const { formData, handleFormInputChange } = useForm()
  const userFormAttributes = formAttributes(formData)
  console.log(userFormAttributes)
  return userFormAttributes.map(attrs => (
    <TextInput onChange={handleFormInputChange} inputAttributes={attrs} />
  ))
}

export default UserAddressForm
