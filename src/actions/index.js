import { envVars } from '../config'

const SUBMIT_FORM_REQUEST = 'SUBMIT_FORM_REQUEST'
const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS'
const SUBMIT_FORM_LOCATION_ERROR = 'SUBMIT_FORM_LOCATION_ERROR'
const SET_STEP = 'SET_STEP'

export const constants = {
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_LOCATION_ERROR,
  SET_STEP,
}

export const actionCreators = {
  submitFormRequest: () => ({ type: SUBMIT_FORM_REQUEST }),
  submitFormSuccess: formData => ({ type: SUBMIT_FORM_SUCCESS, formData }),
  submitFormLocationError: error => ({ type: SUBMIT_FORM_LOCATION_ERROR, error }),
  setStep: step => ({ type: SET_STEP, step }),
}

export const submitForm = ({ city, state, zip, address, ...rest }) => async dispatch => {
  const { locationValidationBaseUrl, locationApiKey } = envVars
  try {
    dispatch(actionCreators.submitFormRequest())
    const fullAddressURL = `${locationValidationBaseUrl}&q=${address}+${city}+${state}+${zip}&apiKey=${locationApiKey}`
    const zipCodeURL = `${locationValidationBaseUrl}&q=${zip}&apiKey=${locationApiKey}`
    const [fullAddressRes, zipRes] = await Promise.all([fetch(fullAddressURL), fetch(zipCodeURL)])
    const { items: fullAddressData } = await fullAddressRes.json()
    const { items: zipData } = await zipRes.json()
    if (!fullAddressData.length) {
      throw new Error('Could not find that address')
    }

    if (!zipData.length) {
      throw new Error('Are you sure you entered the correct zip code?')
    }

    const formattedFullAddressZip = fullAddressData[0].address.postalCode.split('-')[0]
    const zipDataZipCode = zipData[0].address.postalCode
    if (formattedFullAddressZip !== zipDataZipCode) {
      throw new Error('That location is not within this zip code')
    }
    dispatch(actionCreators.setStep(2))
    return dispatch(actionCreators.submitFormSuccess({ city, state, zip, address, ...rest }))
  } catch (error) {
    return dispatch(actionCreators.submitFormLocationError(error.message))
  }
}
