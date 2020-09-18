import React from 'react'

import TextInput from '../formComponents/TextInput'
import useForm from '../../hooks/useForm'
import { formAttributes } from './formAttributes'

import validateUserDataForm from './validateForm'
import SelectDropdown from '../formComponents/SelectDropdown'

const UserAddressForm = ({ submitForm, httpError }) => {
  const { formData, handleFormInputChange, handleSubmit, errors } = useForm(
    submitForm,
    validateUserDataForm
  )
  const userFormAttributes = formAttributes(formData)
  console.log(formData)
  const inputs = userFormAttributes.inputs.map(attrs => (
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
      <SelectDropdown
        onChange={handleFormInputChange}
        attributes={{
          id: 'state',
          name: 'state',
          value: formData.state,
          placeholder: 'Select a state',
        }}
        options={userFormAttributes.states}
      />
      <SelectDropdown
        onChange={handleFormInputChange}
        attributes={{
          id: 'product',
          name: 'product',
          value: formData.product,
          placeholder: 'Select a product',
        }}
        options={[
          { value: 'product-a', text: 'Product A' },
          { value: 'product-b', text: 'Product B' },
          { value: 'product-c', text: 'Product C' },
        ]}
      />
      {httpError && <div>{httpError}</div>}
      <input type="submit" />
    </form>
  )
}

export default UserAddressForm
