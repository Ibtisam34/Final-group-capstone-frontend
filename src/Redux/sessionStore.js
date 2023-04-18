import { configureStore } from '@reduxjs/toolkit';
import { sessionReduser } from './sliceSession';

const store = configureStore({
  reducer: {
    autherization: sessionReduser,
  },
});

export default store;
