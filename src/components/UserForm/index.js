import React, { useEffect } from 'react'

import TextInput from '../formComponents/TextInput'
import useForm from '../../hooks/useForm'
import { formAttributes } from './formAttributes'

import validateUserDataForm from './validateForm'
import SelectDropdown from '../formComponents/SelectDropdown'
import { useHistory } from 'react-router-dom'

const UserForm = ({ submitForm, httpError, hasSubmittedForm, loading }) => {
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
    <div className="user-form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form__desktop-row">
          <TextInput
            onChange={handleFormInputChange}
            inputAttributes={firstName}
            error={errors[firstName.id]}
            isRequired
          />
          <TextInput
            onChange={handleFormInputChange}
            inputAttributes={lastName}
            error={errors[lastName.id]}
            isRequired
          />
        </div>

        <div className="form__desktop-row">
          <TextInput onChange={handleFormInputChange} inputAttributes={phoneNumber} />
          <TextInput
            onChange={handleFormInputChange}
            inputAttributes={email}
            error={errors[email.id]}
            isRequired
          />
        </div>
        <div className="form__desktop-row">
          <TextInput
            onChange={handleFormInputChange}
            inputAttributes={address}
            error={errors[address.id]}
            isRequired
          />
          <TextInput
            onChange={handleFormInputChange}
            inputAttributes={city}
            error={errors[city.id]}
            isRequired
          />
        </div>
        <div className="form__desktop-row">
          <SelectDropdown
            onChange={handleFormInputChange}
            attributes={states.attrs}
            options={states.options}
            error={errors[states.attrs.id]}
            isRequired
          />
          <TextInput
            onChange={handleFormInputChange}
            inputAttributes={zip}
            error={errors[zip.id]}
            limit={5}
            isRequired
          />
        </div>
        <SelectDropdown
          onChange={handleFormInputChange}
          attributes={products.attrs}
          options={products.options}
          label="Product"
        />
        {httpError && <p className="form-field--http-error">{httpError}</p>}
        <input
          type="submit"
          value={loading ? 'Loading' : 'Submit'}
          disabled={!Object.keys(formData).length}
        />
      </form>
    </div>
  )
}

export default UserForm
