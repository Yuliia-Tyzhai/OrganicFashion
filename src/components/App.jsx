import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './Header/Header';
import Loader from './Loader/Loader';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Container from './Container/Container';

const Home = lazy(() => import('../pages/Home/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs/AboutUs'));
const Shop = lazy(() => import('../pages/Shop/Shop'));
const NewCollection = lazy(() =>
  import('../pages/NewCollection/NewCollection')
);
const FollowUs = lazy(() => import('../pages/FollowUs/FollowUs'));

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/new-collection" element={<NewCollection />} />
            <Route path="/follow-us" element={<FollowUs />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
