import { combineReducers } from 'redux'
import { alert } from './alertReducer'
import { authentication } from './authenticationReducer'
import { registration } from './registrationReducer'
import { character } from './characterReducer'
import { party } from './partyReducer'
import { campaign } from './campaignReducer'

const rootReducer = combineReducers({
  alert: alert,
  authentication: authentication,
  registration: registration,
  character: character,
  party: party,
  campaign: campaign
})

export default rootReducer