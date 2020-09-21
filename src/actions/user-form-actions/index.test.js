import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import { constants, actionCreators, submitForm } from './index'

describe('UserForm actions', () => {
  it('should create a request action when requesting to submitting the form', () => {
    const expectedAction = {
      type: constants.SUBMIT_FORM_REQUEST,
    }
    expect(actionCreators.submitFormRequest()).toEqual(expectedAction)
  })

  it('should create a success action when the form has been submitted successfully', () => {
    const formData = {
      firstName: 'John',
      lastName: 'Doe',
    }
    const expectedAction = {
      type: constants.SUBMIT_FORM_SUCCESS,
      formData,
    }
    expect(actionCreators.submitFormSuccess(formData)).toEqual(expectedAction)
  })

  it('should create an error action when the from encounters an http error', () => {
    const error = 'Something Went Wrong'
    const expectedAction = {
      type: constants.SUBMIT_FORM_LOCATION_ERROR,
      error,
    }
    expect(actionCreators.submitFormLocationError(error)).toEqual(expectedAction)
  })

  it('should create a step action to step through the form', () => {
    const step = 2
    const expectedAction = {
      type: constants.SET_STEP,
      step,
    }
    expect(actionCreators.setStep(step)).toEqual(expectedAction)
  })
})

describe('submitForm async action', () => {
  const middleWares = [thunk]
  const mockStore = configureMockStore(middleWares)
  const store = mockStore({
    loading: false,
    error: null,
    hasSubmittedForm: false,
    step: 1,
    user: {},
  })
  afterEach(() => {
    store.clearActions()
  })

  it('creates SUBMIT_FORM_SUCCESS action when form has passed async validation', () => {
    const formData = {
      city: 'Mountain View',
      state: 'CA',
      zip: '94043',
      address: '1600 Amphitheatre Parkway',
    }

    const expectedActions = [
      { type: constants.SUBMIT_FORM_REQUEST },
      { type: constants.SUBMIT_FORM_SUCCESS, formData },
      { type: constants.SET_STEP, step: 2 },
    ]

    const store = mockStore({
      loading: false,
      error: null,
      hasSubmittedForm: false,
      user: {},
    })
    return store.dispatch(submitForm(formData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('creates SUBMIT_FORM_ERROR action when form has failed async validation', () => {
    it('Fails with when the address could not be found', () => {
      const formData = {
        city: 'Nota real city',
        state: 'NA',
        zip: '90944',
        address: 'thisisnotarealaddress',
      }
      const expectedActions = [
        { type: constants.SUBMIT_FORM_REQUEST },
        {
          type: constants.SUBMIT_FORM_LOCATION_ERROR,
          error: 'Are you sure you entered the right address?',
        },
      ]
      return store.dispatch(submitForm(formData)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it("Fails with when zip code does not match the location's zip code input into the form", () => {
      const formData = {
        city: 'Mountain View',
        state: 'CA',
        zip: '90013',
        address: '1600 Amphitheatre Parkway',
      }
      const expectedActions = [
        { type: constants.SUBMIT_FORM_REQUEST },
        {
          type: constants.SUBMIT_FORM_LOCATION_ERROR,
          error: 'That location is not within this zip code',
        },
      ]
      return store.dispatch(submitForm(formData)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('Fails when the zip code is invalid', () => {
      const formData = {
        city: 'Mountain View',
        state: 'CA',
        zip: '00000',
        address: '1600 Amphitheatre Parkway',
      }
      const expectedActions = [
        { type: constants.SUBMIT_FORM_REQUEST },
        {
          type: constants.SUBMIT_FORM_LOCATION_ERROR,
          error: 'Are you sure you entered the correct zip code?',
        },
      ]
      return store.dispatch(submitForm(formData)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
    it('Fails when the address input is not in the state input', () => {
      const formData = {
        city: 'Mountain View',
        state: 'GA',
        zip: '94043',
        address: '1600 Amphitheatre Parkway',
      }
      const expectedActions = [
        { type: constants.SUBMIT_FORM_REQUEST },
        {
          type: constants.SUBMIT_FORM_LOCATION_ERROR,
          error: `${formData.address} does not exist state`,
        },
      ]
      return store.dispatch(submitForm(formData)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
