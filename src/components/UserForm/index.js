import React, { useEffect } from 'react'

import TextInput from '../formComponents/TextInput'
import useForm from '../../hooks/useForm'
import { formAttributes } from './formAttributes'

import validateUserDataForm from './validateForm'
import SelectDropdown from '../formComponents/SelectDropdown'
import { useHistory } from 'react-router-dom'

const UserForm = ({ submitForm, httpError, hasSubmittedForm }) => {
  const { formData, handleFormInputChange, handleSubmit, errors } = useForm(
    submitForm,
    validateUserDataForm
  )
  const history = useHistory()
  const {
    firstName,
    lastName,
    city,
    states,
    zip,
    products,
    phoneNumber,
    email,
    address,
  } = formAttributes(formData)

  useEffect(() => {
    if (hasSubmittedForm) {
      history.push('/user')
    }
  }, [hasSubmittedForm])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput
          onChange={handleFormInputChange}
          inputAttributes={firstName}
          error={errors[firstName.id]}
        />
        <TextInput
          onChange={handleFormInputChange}
          inputAttributes={lastName}
          error={errors[lastName.id]}
        />
      </div>

      <div>
        <TextInput onChange={handleFormInputChange} inputAttributes={phoneNumber} />
        <TextInput
          onChange={handleFormInputChange}
          inputAttributes={email}
          error={errors[email.id]}
        />
      </div>
      <TextInput
        onChange={handleFormInputChange}
        inputAttributes={address}
        error={errors[address.id]}
      />
      <TextInput onChange={handleFormInputChange} inputAttributes={city} error={errors[city.id]} />
      <div>
        <SelectDropdown
          onChange={handleFormInputChange}
          attributes={states.attrs}
          options={states.options}
          error={errors[states.attrs.id]}
        />
        <TextInput
          onChange={handleFormInputChange}
          inputAttributes={zip}
          error={errors[zip.id]}
          limit={5}
        />
      </div>
      <SelectDropdown
        onChange={handleFormInputChange}
        attributes={products.attrs}
        options={products.options}
      />
      {httpError && <div>{httpError}</div>}
      <input type="submit" disabled={!Object.keys(formData).length} />
    </form>
  )
}

export default UserForm
