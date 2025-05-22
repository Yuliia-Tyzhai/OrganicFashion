import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    toggleMobileMenu: state => {
      state.isOpen = !state.isOpen;
    },
    closeMobileMenu: state => {
      state.isOpen = false;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
