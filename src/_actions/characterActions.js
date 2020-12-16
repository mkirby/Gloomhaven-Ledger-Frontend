import { characterConstants } from '../_constants/characterConstants';
import { characterService } from '../_services/characterServices';
// import { userActions } from '../_actions/userActions'
// add back if I want the user refresh func
import { alertActions } from './alertActions';
// import { history } from '../_helpers/history';
// add back if I want to redirect/ push etc

export const characterAction = {
  postCharacter,
  updateCharacter,
  deleteCharacter
}

function postCharacter(character) {
  return dispatch => {
    dispatch(request(character));

    characterService.postCharacter(character)
    .then(
      characterData => { 
        dispatch(success(characterData.character));
        dispatch(alertActions.success('Character creation successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(character) { return { type: characterConstants.CREATE_REQUEST, character } }
  function success(character) { return { type: characterConstants.CREATE_SUCCESS, character } }
  function failure(error) { return { type: characterConstants.CREATE_FAILURE, error } }
}

function updateCharacter(character) {
  console.log('character actions - character', character)
  
  return dispatch => {
    dispatch(request(character));

    characterService.updateCharacter(character)
    .then(
      characterData => { 
        dispatch(success(characterData.character));
        dispatch(alertActions.success('Character update successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(character) { return { type: characterConstants.UPDATE_REQUEST, character } }
  function success(character) { return { type: characterConstants.UPDATE_SUCCESS, character } }
  function failure(error) { return { type: characterConstants.UPDATE_FAILURE, error } }
}

function deleteCharacter(character) {
  return dispatch => {
    dispatch(request(character));

    characterService.deleteCharacter(character)
    .then(
      characterData => { 
        dispatch(success(character));
        dispatch(alertActions.success('Character deleted successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(character) { return { type: characterConstants.DELETE_REQUEST, character } }
  function success(character) { return { type: characterConstants.DELETE_SUCCESS, character } }
  function failure(error) { return { type: characterConstants.DELETE_FAILURE, error } }
}