export const FETCH_USERS = 'FETCH_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ADD_USER = 'ADD_USER';
export const USER_ERROR = 'USER_ERROR';
export const RESET_SIGN_UP_FORM = 'RESET_SIGN_UP_FORM';

export const fetchUsers = () => ({ type: FETCH_USERS });
export const receiveUsers = users => ({ type: RECEIVE_USERS, users });
export const addUser = user => ({ type: ADD_USER, user });
export const userError = message => ({ type: USER_ERROR, message });
export const loginSuccess = users => ({ type: LOGIN_SUCCESS, user });

export const changeNewMessage = text => ({
    type: RESET_SIGN_UP_FORM,
    user
})