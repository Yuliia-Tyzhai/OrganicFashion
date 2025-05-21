import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Loader from './Loader/Loader';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const Home = lazy(() => import('../pages/Home/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs/AboutUs'));
const Shop = lazy(() => import('../pages/Shop/Shop'));
const NewCollection = lazy(() =>
  import('../pages/NewCollection/NewCollection')
);
const FollowUs = lazy(() => import('../pages/FollowUs/FollowUs'));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/new-collection" element={<NewCollection />} />
          <Route path="/follow-us" element={<FollowUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
