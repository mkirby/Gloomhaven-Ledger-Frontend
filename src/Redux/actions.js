import { FETCH_CHARACTER } from './actionTypes'

export const getCharacterFromApi = (id) => {
  return function (dispatch) {
    // FIXME update fetch function
    fetch('http://localhost:5000/characters')
        .then(resp => resp.json())
        .then(data => dispatch({ type: FETCH_CHARACTER, payload: data }))
  }
}