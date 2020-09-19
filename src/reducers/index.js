import { combineReducers } from 'redux'

import userData from './user-form-reducer'

export default combineReducers({
  userState: userData,
})
