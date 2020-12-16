import { characterConstants } from '../_constants/characterConstants';

export function character(state = {}, action) {
  switch (action.type) {
    case characterConstants.CREATE_REQUEST:
      return { creating: true };
    case characterConstants.CREATE_SUCCESS:
      return {
        created: true,
        lastCreated: action.character
      };
    case characterConstants.CREATE_FAILURE:
      return { created: false };
    case characterConstants.UPDATE_REQUEST:
      return { updating: true };
    case characterConstants.UPDATE_SUCCESS:
      return {
        updated: true,
        lastUpdated: action.character
      };
    case characterConstants.UPDATE_FAILURE:
      return { updated: false };
    case characterConstants.DELETE_REQUEST:
      return { updating: true };
    case characterConstants.DELETE_SUCCESS:
      return {
        deleted: true,
        lastDeleted: action.character
      };
    case characterConstants.DELETE_FAILURE:
      return { deleted: false };
    default:
      return state
  }
}