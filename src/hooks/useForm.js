import { useState, useEffect } from 'react'

export default (submitCallback, validateCallback) => {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleFormInputChange = e => {
    const {
      target: { name, value },
    } = e
    const hasErrors = Object.keys(errors).length
    if (hasErrors) {
      setErrors({ ...errors, [name]: null })
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsSubmitting(true)
    validateCallback && setErrors(validateCallback(formData))
  }

  useEffect(() => {
    const hasErrors = Object.keys(errors).length
    if (!hasErrors && isSubmitting) {
      submitCallback(formData)
    }
  }, [errors, isSubmitting, formData, submitCallback])

  return {
    handleFormInputChange,
    handleSubmit,
    formData,
    errors,
    setFormData,
    setErrors,
    setIsSubmitting,
  }
}
