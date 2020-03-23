import {LOGIN_SUCCESS, LOGOUT, READ_TOKEN, USER_SUCCESS} from './constants';
import instance from '../../utils/axios';
import AsyncStorage from '@react-native-community/async-storage';

export const loginState = {authenticated: false};

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:

      instance.defaults.headers.common['Authorization'] = 'Bearer ' + action.payload.access_token;
      AsyncStorage.setItem('token', action.payload.access_token);

      return {
        ...state,
        authenticated: true,
        token: action.payload.access_token,
      };
    case LOGOUT:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        authenticated: false,
        token: undefined,
        user: {},
      };
    case USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case READ_TOKEN:

      instance.defaults.headers.common['Authorization'] = 'Bearer ' + action.payload.access_token;

      return {
        ...state,
        authenticated: true,
        token: action.payload,
      };
  }
  return state;
};

export default loginReducer;
