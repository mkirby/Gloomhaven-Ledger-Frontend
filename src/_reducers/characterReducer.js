import { characterConstants } from '../_constants/characterConstants';

export function character(state = {}, action) {
  switch (action.type) {
    case characterConstants.CREATE_REQUEST:
      return { ...state, creating: true };
    case characterConstants.CREATE_SUCCESS:
      return { ...state, lastCreated: action.character };
    case characterConstants.CREATE_FAILURE:
      return { ...state, created: false };

    case characterConstants.UPDATE_REQUEST:
      return { ...state, updating: true };
    case characterConstants.UPDATE_SUCCESS:
      return { ...state, lastUpdated: action.character };
    case characterConstants.UPDATE_FAILURE:
      return { ...state, updated: false };

    case characterConstants.DELETE_REQUEST:
      return { ...state, deleting: true };
    case characterConstants.DELETE_SUCCESS:
      return { ...state, lastDeleted: action.character };
    case characterConstants.DELETE_FAILURE:
      return { ...state, deleted: false };

    default:
      return state
  }
}