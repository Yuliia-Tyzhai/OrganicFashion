import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  header: {
    logoText: 'Altanschool Web Courses',
  },
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

  shop: {
    title: 'Shop by Categories',
    images: {
      items: [
        {
          mobile: {
            x1: '/src/assets/images/mob/shop-mob-img-1-min.png',
            x2: '/src/assets/images/mob/shop-mob-img-1@2x-min.png',
          },
          tablet: {
            x1: '/src/assets/images/tab/shop-tab-img-1-min.png',
            x2: '/src/assets/images/tab/shop-tab-img-1@2x-min.png',
          },
          desktop: {
            x1: '/src/assets/images/desk1/shop-desk1-img-1-min.png',
            x2: '/src/assets/images/desk1/shop-desk1-img-1@2x-min.png',
          },
          largeDesktop: {
            x1: '/src/assets/images/desk2/shop-desk2-img-1-min.png',
            x2: '/src/assets/images/desk2/shop-desk2-img-1@2x-min.png',
          },
        },
        {
          mobile: {
            x1: '/src/assets/images/mob/shop-mob-img-2-min.png',
            x2: '/src/assets/images/mob/shop-mob-img-2@2x-min.png',
          },
          tablet: {
            x1: '/src/assets/images/tab/shop-tab-img-2-min.png',
            x2: '/src/assets/images/tab/shop-tab-img-2@2x-min.png',
          },
          desktop: {
            x1: '/src/assets/images/desk1/shop-desk1-img-2-min.png',
            x2: '/src/assets/images/desk1/shop-desk1-img-2@2x-min.png',
          },
          largeDesktop: {
            x1: '/src/assets/images/desk2/shop-desk2-img-2-min.png',
            x2: '/src/assets/images/desk2/shop-desk2-img-2@2x-min.png',
          },
        },
        {
          mobile: {
            x1: '/src/assets/images/mob/shop-mob-img-3-min.png',
            x2: '/src/assets/images/mob/shop-mob-img-3@2x-min.png',
          },
          tablet: {
            x1: '/src/assets/images/tab/shop-tab-img-3-min.png',
            x2: '/src/assets/images/tab/shop-tab-img-3@2x-min.png',
          },
          desktop: {
            x1: '/src/assets/images/desk1/shop-desk1-img-3-min.png',
            x2: '/src/assets/images/desk1/shop-desk1-img-3@2x-min.png',
          },
          largeDesktop: {
            x1: '/src/assets/images/desk2/shop-desk2-img-3-min.png',
            x2: '/src/assets/images/desk2/shop-desk2-img-3@2x-min.png',
          },
        },
        {
          mobile: {
            x1: '/src/assets/images/mob/shop-mob-img-4-min.png',
            x2: '/src/assets/images/mob/shop-mob-img-4@2x-min.png',
          },
          tablet: {
            x1: '/src/assets/images/tab/shop-tab-img-4-min.png',
            x2: '/src/assets/images/tab/shop-tab-img-4@2x-min.png',
          },
          desktop: {
            x1: '/src/assets/images/desk1/shop-desk1-img-4-min.png',
            x2: '/src/assets/images/desk1/shop-desk1-img-4@2x-min.png',
          },
          largeDesktop: {
            x1: '/src/assets/images/desk2/shop-desk2-img-4-min.png',
            x2: '/src/assets/images/desk2/shop-desk2-img-4@2x-min.png',
          },
        },
        {
          mobile: {
            x1: '/src/assets/images/mob/shop-mob-img-5-min.png',
            x2: '/src/assets/images/mob/shop-mob-img-5@2x-min.png',
          },
          tablet: {
            x1: '/src/assets/images/tab/shop-tab-img-5-min.png',
            x2: '/src/assets/images/tab/shop-tab-img-5@2x-min.png',
          },
          desktop: {
            x1: '/src/assets/images/desk1/shop-desk1-img-5-min.png',
            x2: '/src/assets/images/desk1/shop-desk1-img-5@2x-min.png',
          },
          largeDesktop: {
            x1: '/src/assets/images/desk2/shop-desk2-img-5-min.png',
            x2: '/src/assets/images/desk2/shop-desk2-img-5@2x-min.png',
          },
        },
      ],
    },
  },

  newCollection: {
    title: 'New Collection',
    images: {
      items: [
        {
          mobile: {
            x1: '/src/assets/images/mob/blog-mob-img-1-min.png',
            x2: '/src/assets/images/mob/blog-mob-img-1@2x-min.png',
          },
          tablet: {
            x1: '/src/assets/images/tab/blog-tab-img-1-min.png',
            x2: '/src/assets/images/tab/blog-tab-img-1@2x-min.png',
          },
          desktop: {
            x1: '/src/assets/images/desk1/blog-desk1-img-1-min.png',
            x2: '/src/assets/images/desk1/blog-desk1-img-1@2x-min.png',
          },
          largeDesktop: {
            x1: '/src/assets/images/desk2/blog-desk2-img-1-min.png',
            x2: '/src/assets/images/desk2/blog-desk2-img-1@2x-min.png',
          },
        },
        {
          mobile: {
            x1: '/src/assets/images/mob/blog-mob-img-2-min.png',
            x2: '/src/assets/images/mob/blog-mob-img-2@2x-min.png',
          },
          tablet: {
            x1: '/src/assets/images/tab/blog-tab-img-2-min.png',
            x2: '/src/assets/images/tab/blog-tab-img-2@2x-min.png',
          },
          desktop: {
            x1: '/src/assets/images/desk1/blog-desk1-img-2-min.png',
            x2: '/src/assets/images/desk1/blog-desk1-img-2@2x-min.png',
          },
          largeDesktop: {
            x1: '/src/assets/images/desk2/blog-desk2-img-2-min.png',
            x2: '/src/assets/images/desk2/blog-desk2-img-2@2x-min.png',
          },
        },
        {
          mobile: {
            x1: '/src/assets/images/mob/blog-mob-img-3-min.png',
            x2: '/src/assets/images/mob/blog-mob-img-3@2x-min.png',
          },
          tablet: {
            x1: '/src/assets/images/tab/blog-tab-img-3-min.png',
            x2: '/src/assets/images/tab/blog-tab-img-3@2x-min.png',
          },
          desktop: {
            x1: '/src/assets/images/desk1/blog-desk1-img-3-min.png',
            x2: '/src/assets/images/desk1/blog-desk1-img-3@2x-min.png',
          },
          largeDesktop: {
            x1: '/src/assets/images/desk2/blog-desk2-img-3-min.png',
            x2: '/src/assets/images/desk2/blog-desk2-img-3@2x-min.png',
          },
        },
      ],
    },
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },

  aboutUs: {
    title: 'About Us',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    backgroundImages: {
      aboutBg: {
        mobile: {
          x1: '/src/assets/images/mob/about-us-mob-img-min.png',
          x2: '/src/assets/images/mob/about-us-mob-img@2x-min.png',
        },
        tablet: {
          x1: '/src/assets/images/tab/about-us-tab-img-min.png',
          x2: '/src/assets/images/tab/about-us-tab-img@2x-min.png',
        },
        desktop: {
          x1: '/src/assets/images/desk1/about-us-desk1-img-min.png',
          x2: '/src/assets/images/desk1/about-us-desk1-img@2x-min.png',
        },
        largeDesktop: {
          x1: '/src/assets/images/desk2/about-us-desk2-img-min.png',
          x2: '/src/assets/images/deak2/about-us-desk2-img@2x-min.png',
        },
      },
    },
  },
  followUs: {
    title: 'Follow Us',
    form: {
      inputs: [
        { id: 'name', placeholder: 'Enter your name', value: '' },
        { id: 'email', placeholder: 'Enter a valid email address', value: '' },
        { id: 'message', placeholder: 'Enter your message', value: '' },
      ],
    },
    backgroundImages: {
      followUsBg: {
        mobile: {
          x1: '/src/assets/images/mob/follow-us-mob@1x.jpg',
          x2: '/src/assets/images/mob/follow-us-mob@2x.jpg',
        },
        tablet: {
          x1: '/src/assets/images/tab/follow-us-tab@1x.jpg',
          x2: '/src/assets/images/tab/follow-us-tab@2x.jpg',
        },
        desktop: {
          x1: '/src/assets/images/desk1/follow-us-desk1@1x.jpg',
          x2: '/src/assets/images/desk1/follow-us-desk1@2x.jpg',
        },
        largeDesktop: {
          x1: '/src/assets/images/desk2/follow-us-desk2@1x.jpg',
          x2: '/src/assets/images/desk2/follow-us-desk2@2x.jpg',
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
