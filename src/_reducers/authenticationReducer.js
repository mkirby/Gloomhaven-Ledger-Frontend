import { userConstants } from '../_constants/userConstants'

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user } : {}

export function authentication (state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      console.log("AuthReduc - LOGIN_REQUEST")
      return {
        loggingIn: true,
        user: action.user,
        token: null
      }
    case userConstants.LOGIN_SUCCESS:
      console.log("AuthReduc - LOGIN_SUCCESS")
      return {
        loggedIn: true,
        user: action.user,
        token: localStorage.getItem("token")
      };
    case userConstants.LOGIN_FAILURE:
      console.log("AuthReduc - LOGIN_FAILURE")
      return {};
    case userConstants.LOGOUT:
      console.log("AuthReduc - LOGOUT")
      return {};
    default:
      return state
  }
}