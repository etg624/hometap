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
    setErrors(validateCallback(formData))
  }

  useEffect(() => {
    if (!Object.keys(errors).length && isSubmitting) {
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
