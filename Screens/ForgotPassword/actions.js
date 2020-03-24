import {FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS} from './constants';

export function forgotPasswordRequest(payload) {
  return {
    type: FORGOT_PASSWORD_REQUEST,
    payload: payload,
  };
}

export function forgotPasswordSuccess(payload) {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload,
  };
}

export function forgotPasswordErro() {
  return {
    type: FORGOT_PASSWORD_ERROR,
  };
}
