import {REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS} from './constants';

export function registerRequest(payload) {
  return {
    type: REGISTER_REQUEST,
    payload: payload,
  };
}

export function registerSuccess(payload) {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
}

export function registerError() {
  return {
    type: REGISTER_ERROR,
  };
}
