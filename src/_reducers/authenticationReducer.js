import { userConstants } from '../_constants/userConstants'

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user } : {}

export function authentication (state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        token: null
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        token: localStorage.getItem("token")
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    case userConstants.REFRESH_REQUEST:
      return {...state};
    case userConstants.REFRESH_SUCCESS:
      debugger
      return {
        ...state,
        user: action.user,
        token: localStorage.getItem("token")
      };
    case userConstants.REFRESH_FAILURE:
      return {...state};
    default:
      return state
  }
}