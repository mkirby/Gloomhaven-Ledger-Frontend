import { combineReducers } from 'redux'

const defaultState = {
  api: []
}

const apiReducer = (state = defaultState.api, action) => {
  switch (action.type) {
    // FIXME update fetch requests
    case "FETCH_CHARACTER":
        return action.payload
    default:
        return state
}
}

const rootReducer = combineReducers({
  api: apiReducer
})

export default rootReducer