import {put, takeEvery} from '@redux-saga/core/effects';
import {LOGIN_REQUEST} from './constants';
import {loginSuccess} from './actions';
import instance from '../../utils/axios';
import env from '../../utils/env';
import {Alert} from 'react-native';

export function* request(action) {
  try {
    const {data} = yield instance.post('oauth/token', {
      ...action.payload,
      grant_type: 'password',
      client_id: env.client_id,
      client_secret: env.client_secret,
      scope: '*',
    });

    yield put(loginSuccess(data));
  } catch (e) {
    Alert.alert('Login Error!', e.response.data.message);
  }
}

export function* loginSaga() {
  console.log('login saga registered');
  yield takeEvery(LOGIN_REQUEST, request);
}
