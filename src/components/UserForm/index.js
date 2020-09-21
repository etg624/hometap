import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import useForm from '../../hooks/useForm'

import { formAttributes } from './formAttributes'
import validateUserDataForm from './validateForm'

import TextInput from '../formComponents/TextInput'
import SelectDropdown from '../formComponents/SelectDropdown'
import Button from '../formComponents/Button'
import MultiSelect from '../formComponents/MultiSelect'

import './UserForm.css'

const UserForm = ({ submitForm, userState }) => {
  const { error: httpError, hasSubmittedForm, loading, step } = userState

  const {
    formData,
    handleFormInputChange,
    handleSubmit,
    errors,
    setFormData,
    setIsSubmitting,
  } = useForm(submitForm, validateUserDataForm)

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

  const history = useHistory()
  useEffect(() => {
    if (hasSubmittedForm && step === 2) {
      history.push('/user')
    }
  }, [hasSubmittedForm, history, step])

  useEffect(() => {
    if (httpError) {
      setIsSubmitting(false)
    }
  }, [httpError, setIsSubmitting])

  return (
    <div className="user-form-container">
      <header className="user-form__heading">
        <h1>
          Choosing a product. <br /> As easy as your ABC's.
        </h1>
        <p>You're one step closer to getting your product. We just need a few details first.</p>
      </header>

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
        <MultiSelect
          attributes={products.attrs}
          options={products.options}
          error={errors[products.attrs.id]}
          setFormData={setFormData}
          formData={formData}
          isRequired
        />
        {httpError && <p className="form--http-error">{httpError}</p>}
        <Button
          isLoading={loading}
          text="Submit"
          type="submit"
          maxWidth="50"
          modifier="large"
          disabled={!Object.keys(formData).length}
        />
      </form>
    </div>
  )
}

export default UserForm
