import { constants } from '../../containers/UserFormContainer/actions'

const initialState = {
  loading: false,
  error: null,
  hasSubmittedForm: false,
  user: {},
}

const userFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SUBMIT_FORM_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case constants.SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        user: { ...action.formData },
        hasSubmittedForm: true,
        loading: false,
        error: null,
      }
    case constants.SUBMIT_FORM_LOCATION_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state
  }
}

export default userFormReducer