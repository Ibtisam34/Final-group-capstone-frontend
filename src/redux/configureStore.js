import {
  applyMiddleware, combineReducers, createStore, compose,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import usersReducer from './users/usersReducer';
import doctorsReducer from './doctors/doctorsReducer';
import appointmentsReducer from './appointments/appointment';

const reducer = combineReducers({
  usersReducer,
  doctorsReducer,
  appointmentsReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
