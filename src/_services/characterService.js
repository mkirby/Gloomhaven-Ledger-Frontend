import { authHeader } from "../_helpers/authHeader";
import { history } from "../_helpers/history";
import { userService } from "./userService";

const apiUrl = "http://localhost:3000/api/v1";

export const characterService = {
  postCharacter,
  updateCharacter,
  deleteCharacter,
};

function postCharacter(character) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({ character }),
  };
  return fetch(`${apiUrl}/characters`, requestOptions).then(handleResponse);
}

function updateCharacter(character) {
  const requestOptions = {
    method: "PATCH",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({ character }),
  };
  return fetch(`${apiUrl}/characters/${character.id}`, requestOptions).then(
    handleResponse
  );
}

function deleteCharacter(character) {
  const requestOptions = {
    method: "DELETE",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return fetch(`${apiUrl}/characters/${character.id}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        userService.logout();
        history.push("/login");
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
