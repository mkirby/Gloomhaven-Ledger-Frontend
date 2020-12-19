import { userConstants } from '../_constants/userConstants'
import { characterConstants } from '../_constants/characterConstants'
import { partyConstants } from '../_constants/partyConstants'
import { campaignConstants } from '../_constants/campaignConstants'

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user } : {}
let newCharacters
let newParties
let newCampaigns
let index

export function authentication (state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return { loggingIn: true, user: action.user }
    case userConstants.LOGIN_SUCCESS:
      return { loggedIn: true, user: action.user };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    case userConstants.REFRESH_REQUEST:
      return { ...state };
    case userConstants.REFRESH_SUCCESS:
      return { ...state, user: action.user };
    case userConstants.REFRESH_FAILURE:
      return {...state};

    case characterConstants.CREATE_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return Object.assign({}, state, { user: action.payload.user});

    case characterConstants.UPDATE_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return Object.assign({}, state, { user: action.payload.user});

    case characterConstants.DELETE_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return Object.assign({}, state, { user: action.payload.user});

    case partyConstants.CREATE_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return Object.assign({}, state, { user: action.payload.user});

    case partyConstants.UPDATE_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return Object.assign({}, state, { user: action.payload.user});

    case partyConstants.DELETE_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return Object.assign({}, state, { user: action.payload.user});

    case campaignConstants.CREATE_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return Object.assign({}, state, { user: action.payload.user});

    case campaignConstants.UPDATE_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return Object.assign({}, state, { user: action.payload.user});

    case campaignConstants.DELETE_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return Object.assign({}, state, { user: action.payload.user});

    default:
      return state
  }
}