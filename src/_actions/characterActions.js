import { characterConstants } from "../_constants/characterConstants";
import { characterService } from "../_services/characterService";
import { alertActions } from "./alertActions";
// import { history } from '../_helpers/history';
// add back if I want to redirect/ push etc

export const characterAction = {
  postCharacter,
  updateCharacter,
  deleteCharacter,
};

function postCharacter(character) {
  return (dispatch) => {
    dispatch(request(character));

    characterService.postCharacter(character).then(
      (data) => {
        dispatch(success({ user: data.user, character: data.character }));
        dispatch(alertActions.success("Character creation successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(character) {
    return { type: characterConstants.CREATE_REQUEST, character };
  }
  function success(payload) {
    return { type: characterConstants.CREATE_SUCCESS, payload };
  }
  function failure(error) {
    return { type: characterConstants.CREATE_FAILURE, error };
  }
}

function updateCharacter(character) {
  return (dispatch) => {
    dispatch(request(character));

    characterService.updateCharacter(character).then(
      (data) => {
        dispatch(success({ user: data.user, character: data.character }));
        dispatch(alertActions.success("Character update successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(character) {
    return { type: characterConstants.UPDATE_REQUEST, character };
  }
  function success(payload) {
    return { type: characterConstants.UPDATE_SUCCESS, payload };
  }
  function failure(error) {
    return { type: characterConstants.UPDATE_FAILURE, error };
  }
}

function deleteCharacter(character) {
  return (dispatch) => {
    dispatch(request(character));

    characterService.deleteCharacter(character).then(
      (data) => {
        dispatch(success({ user: data.user, character: character }));
        dispatch(alertActions.success("Character delete successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(character) {
    return { type: characterConstants.DELETE_REQUEST, character };
  }
  function success(payload) {
    return { type: characterConstants.DELETE_SUCCESS, payload };
  }
  function failure(error) {
    return { type: characterConstants.DELETE_FAILURE, error };
  }
}
