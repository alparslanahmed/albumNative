import {put, takeEvery} from '@redux-saga/core/effects';
import instance from '../../utils/axios';
import {Alert} from 'react-native';
import {FORGOT_PASSWORD_REQUEST} from './constants';
import * as RootNavigation from '../../RootNavigation';

export function* request(action) {
  try {
    const {data} = yield instance.post('api/password/email', {
      ...action.payload,
    });

    RootNavigation.navigate('Login');

    Alert.alert('Password Reset Success!', 'Please check your inbox for reset link.');
  } catch (e) {
    Alert.alert('Password Reset Error!', e.response.data.message);
  }
}

export function* forgotPasswordSaga() {
  yield takeEvery(FORGOT_PASSWORD_REQUEST, request);
}
