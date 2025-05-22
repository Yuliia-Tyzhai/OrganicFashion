import { configureStore } from '@reduxjs/toolkit';
import mobileMenuReducer from './mobileMenu/slice';
import contentReducer from './content/slice';

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    content: contentReducer,
  },
});

export default store;
