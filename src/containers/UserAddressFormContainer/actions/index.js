import { envVars } from '../../../config'

export const SUBMIT_FORM_REQUEST = 'SUBMIT_FORM_REQUEST'
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS'
export const SUBMIT_FORM_LOCATION_ERROR = 'SUBMIT_FORM_LOCATION_ERROR'
export const SET_MULTIPLE_LOCATIONS_FOUND = 'SET_MULTIPLE_LOCATIONS_FOUND'
export const submitFormRequest = () => ({ type: SUBMIT_FORM_REQUEST })
export const submitFormSuccess = formData => ({ type: SUBMIT_FORM_SUCCESS, formData })
export const submitFormLocationError = error => ({ type: SUBMIT_FORM_LOCATION_ERROR, error })
export const setMultipleLocationsFound = locations => ({
  type: SET_MULTIPLE_LOCATIONS_FOUND,
  locations,
})

export const submitForm = ({ city, state, zip, address, ...rest }) => async dispatch => {
  dispatch(submitFormRequest())
  const { locationValidationBaseUrl, locationApiKey } = envVars
  try {
    const [fullAddressRes, zipRes] = await Promise.all([
      fetch(
        `${locationValidationBaseUrl}&q=${address}+${city}+${state}+${zip}&apiKey=${locationApiKey}`
      ),
      fetch(`${locationValidationBaseUrl}&q=${zip}&apiKey=${locationApiKey}`),
    ])
    const { items: fullAddressData } = await fullAddressRes.json()
    const { items: zipData } = await zipRes.json()
    if (!fullAddressData.length) {
      throw new Error('Could not find that address')
    }

    if (!zipData.length) {
      throw new Error('Could not find that zip code')
    }

    const formattedFullAddressZip = fullAddressData[0].address.postalCode.split('-')[0]
    const zipDataZipCode = zipData[0].address.postalCode
    console.log(zipDataZipCode)
    if (formattedFullAddressZip !== zipDataZipCode) {
      throw new Error('That location is not within this zip code')
    }

    return dispatch(submitFormSuccess({ city, state, zip, ...rest }))
  } catch (error) {
    dispatch(submitFormLocationError(error.message))
  }
}
