import { combineReducers } from 'redux'
import { alert } from './alertReducer'
import { authentication } from './authenticationReducer'
import { registration } from './registrationReducer'
import { character } from './characterReducer'


const rootReducer = combineReducers({
  alert: alert,
  authentication: authentication,
  registration: registration,
  character: character
})

export default rootReducer