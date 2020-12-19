import { campaignConstants } from '../_constants/campaignConstants';

export function campaign(state = {}, action) {
  switch (action.type) {
    case campaignConstants.CREATE_REQUEST:
      return { ...state };
    case campaignConstants.CREATE_SUCCESS:
      return { ...state, lastCreated: action.payload.campaign };
    case campaignConstants.CREATE_FAILURE:
      return { ...state };

    case campaignConstants.UPDATE_REQUEST:
      return { ...state };
    case campaignConstants.UPDATE_SUCCESS:
      return { ...state, lastUpdated: action.payload.campaign };
    case campaignConstants.UPDATE_FAILURE:
      return { ...state };

    case campaignConstants.DELETE_REQUEST:
      return { ...state };
    case campaignConstants.DELETE_SUCCESS:
      return { ...state, lastDeleted: action.payload.campaign };
    case campaignConstants.DELETE_FAILURE:
      return { ...state };

    default:
      return state
  }
}