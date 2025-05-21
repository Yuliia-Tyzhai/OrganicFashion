import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  home: {
    title: 'Organic Fashion',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    backgroundImages: {
      hero: {
        mobile: {
          x1: '/src/assets/images/mob/home-mob-img-min.png',
          x2: '/src/assets/images/mob/home-mob-img@2x-min.png',
        },
        tablet: {
          x1: '/src/assets/images/tab/home-tab-img-min.png',
          x2: '/src/assets/images/tab/home-tab-img@2x-min.png',
        },
        desktop: {
          x1: '/src/assets/images/desk1/home-desk1-img-min.png',
          x2: '/src/assets/images/desk1/home-desk1-img@2x-min.png',
        },
        largeDesktop: {
          x1: '/src/assets/images/desk2/home-desk2-img-min.png',
          x2: '/src/assets/images/deak2/home-desk2-img@2x-min.png',
        },
      },
    },
  },
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
});

export default contentSlice.reducer;
