import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './content/slice';

const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export default store;
