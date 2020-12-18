import { partyConstants } from '../_constants/partyConstants';
import { partyService } from '../_services/partyService';
import { alertActions } from './alertActions';
// import { history } from '../_helpers/history';
// add back if I want to redirect/ push etc

export const partyAction = {
  postParty,
  updateParty,
  deleteParty
}

function postParty(party) {
  return dispatch => {
    dispatch(request(party));

    partyService.postParty(party)
    .then(
      partyData => { 
        dispatch(success(partyData.party));
        dispatch(alertActions.success('Party creation successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(party) { return { type: partyConstants.CREATE_REQUEST, party } }
  function success(party) { return { type: partyConstants.CREATE_SUCCESS, party } }
  function failure(error) { return { type: partyConstants.CREATE_FAILURE, error } }
}

function updateParty(party) {
  return dispatch => {
    dispatch(request(party));

    partyService.updateParty(party)
    .then(
      partyData => { 
        dispatch(success(partyData.party));
        dispatch(alertActions.success('Party update successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(party) { return { type: partyConstants.UPDATE_REQUEST, party } }
  function success(party) { return { type: partyConstants.UPDATE_SUCCESS, party } }
  function failure(error) { return { type: partyConstants.UPDATE_FAILURE, error } }
}

function deleteParty(party) {
  return dispatch => {
    dispatch(request(party));

    partyService.deleteParty(party)
    .then(
      partyData => { 
        dispatch(success(party));
        dispatch(alertActions.success('Party deleted successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(party) { return { type: partyConstants.DELETE_REQUEST, party } }
  function success(party) { return { type: partyConstants.DELETE_SUCCESS, party } }
  function failure(error) { return { type: partyConstants.DELETE_FAILURE, error } }
}