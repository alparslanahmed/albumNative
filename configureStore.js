import {applyMiddleware, combineReducers, createStore} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import {loginSaga} from "./Screens/Login/saga";
import loginReducer, {loginState} from "./Screens/Login/reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    login: loginReducer,
}), {login: loginState}, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(loginSaga);

export default store;
