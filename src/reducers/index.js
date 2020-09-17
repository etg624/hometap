import { combineReducers } from 'redux'

import locationReducer from './location-input-reducer'

export default combineReducers({
  location: locationReducer,
})
