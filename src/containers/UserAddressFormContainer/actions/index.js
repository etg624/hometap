import { envVars } from '../../../config'

export const SUBMIT_FORM_REQUEST = 'SUBMIT_FORM_REQUEST'
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS'
export const SUBMIT_FORM_ERROR = 'SUBMIT_FORM_ERROR'

export const submitFormRequest = () => ({ type: SUBMIT_FORM_REQUEST })
export const submitFormSuccess = formData => ({ type: SUBMIT_FORM_SUCCESS, formData })
export const submitFormError = error => ({ type: SUBMIT_FORM_REQUEST, error })

export const submitForm = ({ city, state, zip, ...rest }) => async dispatch => {
  dispatch(submitFormRequest())
  const { locationValidationBaseUrl, locationApiKey } = envVars
  const res = await fetch(
    `${locationValidationBaseUrl}?q=${city}+${state}+${zip}&apiKey=${locationApiKey}`
  )

  const data = await res.json()
  submitFormSuccess({ city, state, zip, ...rest })
  console.log(data)
}
