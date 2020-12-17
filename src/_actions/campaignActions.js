import { campaignConstants } from '../_constants/campaignConstants';
import { campaignService } from '../_services/campaignService';
// import { userActions } from '../_actions/userActions'
// add back if I want the user refresh func
import { alertActions } from './alertActions';
// import { history } from '../_helpers/history';
// add back if I want to redirect/ push etc

export const campaignAction = {
  postCampaign,
  updateCampaign,
  deleteCampaign
}

function postCampaign(campaign) {
  return dispatch => {
    dispatch(request(campaign));

    campaignService.postCampaign(campaign)
    .then(
      campaignData => { 
        dispatch(success(campaignData.campaign));
        dispatch(alertActions.success('Campaign creation successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(campaign) { return { type: campaignConstants.CREATE_REQUEST, campaign } }
  function success(campaign) { return { type: campaignConstants.CREATE_SUCCESS, campaign } }
  function failure(error) { return { type: campaignConstants.CREATE_FAILURE, error } }
}

function updateCampaign(campaign) {
  return dispatch => {
    dispatch(request(campaign));

    campaignService.updateCampaign(campaign)
    .then(
      campaignData => { 
        dispatch(success(campaignData.campaign));
        dispatch(alertActions.success('Campaign update successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(campaign) { return { type: campaignConstants.UPDATE_REQUEST, campaign } }
  function success(campaign) { return { type: campaignConstants.UPDATE_SUCCESS, campaign } }
  function failure(error) { return { type: campaignConstants.UPDATE_FAILURE, error } }
}

function deleteCampaign(campaign) {
  return dispatch => {
    dispatch(request(campaign));

    campaignService.deleteCampaign(campaign)
    .then(
      campaignData => { 
        dispatch(success(campaign));
        dispatch(alertActions.success('Campaign deleted successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(campaign) { return { type: campaignConstants.DELETE_REQUEST, campaign } }
  function success(campaign) { return { type: campaignConstants.DELETE_SUCCESS, campaign } }
  function failure(error) { return { type: campaignConstants.DELETE_FAILURE, error } }
}