import {
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_LOCATION_ERROR,
} from '../containers/UserAddressFormContainer/actions'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phonNumber: '',
  city: '',
  state: '',
  zip: '',
  loading: false,
  error: null,
}

const locationInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        ...action.formData,
        loading: false,
        error: null,
      }
    case SUBMIT_FORM_LOCATION_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state
  }
}

export default locationInputReducer
