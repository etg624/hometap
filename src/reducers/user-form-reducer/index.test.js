import userFormReducer from './index'

describe('user form reducer', () => {
  const initialState = {
    loading: false,
    error: null,
    step: 1,
    hasSubmittedForm: false,
    user: {},
  }
  it('should return the initial state when no actions have been passed', () => {
    expect(userFormReducer(undefined, {})).toEqual(initialState)
  })

  it('should set handle the SUBMIT_FORM_REQUEST action', () => {
    expect(userFormReducer(initialState, { type: 'SUBMIT_FORM_REQUEST' })).toEqual({
      ...initialState,
      loading: true,
    })
  })

  it('should set handle the SUBMIT_FORM_SUCCESS action', () => {
    const formData = {
      firstName: 'John',
      lastNameDoe: 'Doe',
    }
    expect(userFormReducer(initialState, { type: 'SUBMIT_FORM_SUCCESS', formData })).toEqual({
      ...initialState,
      user: { ...formData },
      hasSubmittedForm: true,
      loading: false,
      error: null,
    })
  })

  it('should set handle the SUBMIT_FORM_LOCATION_ERROR action', () => {
    const error = 'Something went wrong'
    expect(userFormReducer(initialState, { type: 'SUBMIT_FORM_LOCATION_ERROR', error })).toEqual({
      ...initialState,
      loading: false,
      error,
    })
  })

  it('should set handle the SET_STEP action', () => {
    expect(userFormReducer(initialState, { type: 'SET_STEP', step: 2 })).toEqual({
      ...initialState,
      step: 2,
    })
  })
})
