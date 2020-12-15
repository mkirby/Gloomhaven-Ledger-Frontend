import { authHeader } from '../_helpers/authHeader';
import { history } from '../_helpers/history';

const apiUrl = 'http://localhost:3000/api/v1'

export const userService = {
    login,
    logout,
    register,
    getById,
    getByUsername,
    update
};

function login(username, password) {
    console.log("UserServices: Login")
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user: { username, password }})
    };
    return fetch(`${apiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(data => {
            console.log("UserServices: Login fetched data: ", data)
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.jwt);
            console.log("UserServices: localStorage after set: ", localStorage)
            return data;
        });
}

function logout() {
    localStorage.clear();
    // localStorage.removeItem('user');
    // localStorage.removeItem('token')
}

function getByUsername(username) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/find_user_by_username?username=${username}`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${apiUrl}/users`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PATCH',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                history.push("/login")
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}