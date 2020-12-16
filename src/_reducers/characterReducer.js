import { characterConstants } from '../_constants/characterConstants';

export function character(state = {}, action) {
  switch (action.type) {
    case characterConstants.UPDATE_REQUEST:
      return { updating: true };
    case characterConstants.UPDATE_SUCCESS:
      return {
        updated: true,
        lastUpdated: action.character
      };
    case characterConstants.UPDATE_FAILURE:
      return {
        updated: false
      };
    default:
      return state
  }
}