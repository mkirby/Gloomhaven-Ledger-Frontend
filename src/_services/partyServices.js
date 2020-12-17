import { authHeader } from '../_helpers/authHeader';
import { history } from '../_helpers/history';
import { userService } from './userServices'

const apiUrl = 'http://localhost:3000/api/v1'

export const partyService = {
    postParty,
    updateParty,
    deleteParty
}

function postParty(party) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({party})
  }
  return fetch(`${apiUrl}/parties`, requestOptions).then(handleResponse)
}

function updateParty(party) {
  const requestOptions = {
    method: 'PATCH',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({party})
  };
  return fetch(`${apiUrl}/parties/${party.id}`, requestOptions).then(handleResponse);
}

function deleteParty(party) {
  const requestOptions = {
    method: 'DELETE',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  };
  return fetch(`${apiUrl}/parties/${party.id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              userService.logout();
              history.push("/login")
          }
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }
      return data;
  });
}