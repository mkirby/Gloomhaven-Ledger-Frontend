import { partyConstants } from '../_constants/partyConstants';

export function party(state = {}, action) {
  switch (action.type) {
    case partyConstants.CREATE_REQUEST:
      return { ...state };
    case partyConstants.CREATE_SUCCESS:
      return { ...state, lastCreated: action.party };
    case partyConstants.CREATE_FAILURE:
      return { ...state };

    case partyConstants.UPDATE_REQUEST:
      return { ...state };
    case partyConstants.UPDATE_SUCCESS:
      return { ...state, lastUpdated: action.party };
    case partyConstants.UPDATE_FAILURE:
      return { ...state };

    case partyConstants.DELETE_REQUEST:
      return { ...state };
    case partyConstants.DELETE_SUCCESS:
      return { ...state, lastDeleted: action.party };
    case partyConstants.DELETE_FAILURE:
      return { ...state };

    default:
      return state
  }
}