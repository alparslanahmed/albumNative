/*
 *
 * Login actions
 *
 */

import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT, READ_TOKEN,
  USER_ERROR,
  USER_REQUEST,
  USER_SUCCESS,
} from './constants';

export function loginRequest(username, password) {
  return {
    type: LOGIN_REQUEST,
    payload: {username, password},
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginError() {
  return {
    type: LOGIN_ERROR,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function userRequest() {
  return {
    type: USER_REQUEST,
  };
}

export function userSuccess(payload) {
  return {
    type: USER_SUCCESS,
    payload,
  };
}

export function userError() {
  return {
    type: USER_ERROR,
  };
}

export function readToken(payload) {
  return {
    type: READ_TOKEN,
    payload,
  };
}

