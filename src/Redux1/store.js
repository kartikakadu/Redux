import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Counter/CounterSlice';
export const store = configureStore({
  reducer: {
    //  reducer it helps to change state

    counter: counterReducer,
  },
});
