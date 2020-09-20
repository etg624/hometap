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
  console.log(formData)
  const requiredFieldsWithFormattedMessages = [
    ['firstName', 'First Name is required'],
    ['lastName', 'Last Name is Required'],
    ['email', 'Email is Required'],
    ['address', 'Address is Required'],
    ['city', 'City is Required'],
    ['state', 'State is required'],
    ['zip', 'Zip Code is required'],
    ['product', 'Please select a product'],
  ]

  for (const requiredField of requiredFieldsWithFormattedMessages) {
    buildRequiredErrors(errors, formData, requiredField)
  }

  const { email } = formData
  const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const isValidEmail = validEmailRegex.test(email)

  const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(formData.zip)
  if (!isValidEmail && !errors['email']) {
    errors.email = 'Email must be a valid email address'
  }
  if (!isValidZip && !errors['zip']) {
    errors.zip = 'Are you sure you entered the right zip code?'
  }
  return errors
}

export default validateUserDataForm
