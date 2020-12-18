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
      return Object.assign({}, state, { user: { ...state.user,
        characters: [...state.user.characters, action.character]
      }});
    case characterConstants.UPDATE_SUCCESS:
      newCharacters = [...state.user.characters]
      index = newCharacters.findIndex(character => character.id === action.character.id)
      newCharacters.splice(index, 1, action.character )
      return Object.assign({}, state, { user: { ...state.user,
        characters: newCharacters
      }});
    case characterConstants.DELETE_SUCCESS:
      newCharacters = [...state.user.characters]
      index = newCharacters.findIndex(character => character.id === action.character.id)
      newCharacters.splice( index, 1 )
      return Object.assign({}, state, { user: { ...state.user,
        characters: newCharacters
      }});
    case partyConstants.CREATE_SUCCESS:
      return Object.assign({}, state, { user: { ...state.user,
        parties: [...state.user.parties, action.party]
      }});
    case partyConstants.UPDATE_SUCCESS:
      newParties = [...state.user.parties]
      index = newParties.findIndex(party => party.id === action.party.id)
      newParties.splice(index, 1, action.party )
      return Object.assign({}, state, { user: { ...state.user,
        parties: newParties
      }});
    case partyConstants.DELETE_SUCCESS:
      newParties = [...state.user.parties]
      index = newParties.findIndex(party => party.id === action.party.id)
      newParties.splice( index, 1 )
      return Object.assign({}, state, { user: { ...state.user,
        parties: newParties
      }});
      case campaignConstants.CREATE_SUCCESS:
        return Object.assign({}, state, { user: { ...state.user,
          campaigns: [...state.user.campaigns, action.campaign]
        }});
      case campaignConstants.UPDATE_SUCCESS:
        newCampaigns = [...state.user.campaigns]
        index = newCampaigns.findIndex(campaign => campaign.id === action.campaign.id)
        newCampaigns.splice(index, 1, action.campaign )
        return Object.assign({}, state, { user: { ...state.user,
          campaigns: newCampaigns
        }});
      case campaignConstants.DELETE_SUCCESS:
        newCampaigns = [...state.user.campaigns]
        index = newCampaigns.findIndex(campaign => campaign.id === action.campaign.id)
        newCampaigns.splice( index, 1 )
        return Object.assign({}, state, { user: { ...state.user,
          campaigns: newCampaigns
        }});
    default:
      return state
  }
}