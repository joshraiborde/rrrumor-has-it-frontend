import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import singleReducer from './singleReducer'

export default combineReducers({

  users: userReducer,
  singles: singleReducer,
})