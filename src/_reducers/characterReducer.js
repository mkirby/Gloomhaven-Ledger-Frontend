import { characterConstants } from '../_constants/characterConstants';

export function character(state = {}, action) {
  switch (action.type) {
    case characterConstants.CREATE_REQUEST:
      return { ...state };
    case characterConstants.CREATE_SUCCESS:
      return { ...state, lastCreated: action.payload.character };
    case characterConstants.CREATE_FAILURE:
      return { ...state };

    case characterConstants.UPDATE_REQUEST:
      return { ...state };
    case characterConstants.UPDATE_SUCCESS:
      return { ...state, lastUpdated: action.payload.character };
    case characterConstants.UPDATE_FAILURE:
      return { ...state };

    case characterConstants.DELETE_REQUEST:
      return { ...state };
    case characterConstants.DELETE_SUCCESS:
      return { ...state, lastDeleted: action.payload.character };
    case characterConstants.DELETE_FAILURE:
      return { ...state };

    default:
      return state
  }
}