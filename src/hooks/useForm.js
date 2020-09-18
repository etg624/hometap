import { useState, useEffect } from 'react'

export default (submitCallback, validateCallback) => {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleFormInputChange = e => {
    const {
      target: { name, value },
    } = e

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsSubmitting(true)
    validateCallback && setErrors(validateCallback(formData))
  }

  useEffect(() => {
    const hasErrors = Object.keys(errors).length
    console.log(hasErrors)
    if (!hasErrors && isSubmitting) {
      submitCallback(formData)
    }
  }, [errors, isSubmitting])

  return {
    handleFormInputChange,
    handleSubmit,
    formData,
    errors,
    setFormData,
    setErrors,
  }
}
