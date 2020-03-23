import {put, takeEvery} from '@redux-saga/core/effects';
import instance from '../../utils/axios';
import {Alert} from 'react-native';
import {REGISTER_REQUEST} from './constants';
import {CommonActions} from '@react-navigation/native';
import * as RootNavigation from '../../RootNavigation';

export function* request(action) {
  try {
    const {data} = yield instance.post('api/register', {
      ...action.payload,
    });

    RootNavigation.navigate('Login');

    Alert.alert('Register Success!', data.message);
  } catch (e) {
    Alert.alert('Register Error!', e.response.data.message);
  }
}

export function* registerSaga() {
  yield takeEvery(REGISTER_REQUEST, request);
}
