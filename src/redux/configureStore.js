import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import appointmentSlice from './reducer/appointments/appointmentSlice';
import userSlice from './reducer/user/userSlice';

const rootReducer = combineReducers({
  user: userSlice,
  appointments: appointmentSlice,
});

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
  },
);

export default store;
