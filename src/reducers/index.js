import { combineReducers } from 'redux'

import userData from './user-data-reducer'

export default combineReducers({
  user: userData,
})
