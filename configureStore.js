import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {loginSaga} from './Screens/Login/saga';
import loginReducer, {loginState} from './Screens/Login/reducer';
import {registerSaga} from './Screens/Register/saga';
import registerReducer, {registerState} from './Screens/Register/reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    login: loginReducer,
    register: registerReducer,
  }),
  {
    login: loginState,
    register: registerState,
  },
  applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(loginSaga);
sagaMiddleware.run(registerSaga);

export default store;
