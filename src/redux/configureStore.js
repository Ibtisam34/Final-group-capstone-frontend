import {
  applyMiddleware, combineReducers, createStore, compose,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import usersReducer from './users/usersReducer';

const reducer = combineReducers({
  usersReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
