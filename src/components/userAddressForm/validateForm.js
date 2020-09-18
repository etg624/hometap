const buildRequiredErrors = (errors, formData, requiredFieldAndMessage) => {
  const field = requiredFieldAndMessage[0]
  const message = requiredFieldAndMessage[1]
  const requiredFieldValue = formData[field]
  if (!requiredFieldValue) {
    errors[field] = message
  }
  return errors
}

const validateUserDataForm = formData => {
  const errors = {}
  const requiredFieldsWithFormattedMessages = [
    ['firstName', 'First Name is required'],
    ['lastName', 'Last Name is Required'],
    ['email', 'Email is Required'],
    ['address', 'Address is Required'],
    ['city', 'City is Required'],
    ['state', 'State is required'],
    ['zip', 'Zip Code is required'],
  ]

  for (const requiredField of requiredFieldsWithFormattedMessages) {
    buildRequiredErrors(errors, formData, requiredField)
  }

  const { email } = formData
  const isValidEmail = !/^\S+@\S+$/.test(email)
  if (isValidEmail) {
    errors.email = 'Email must be a valid email address'
  }

  return errors
}

export default validateUserDataForm
