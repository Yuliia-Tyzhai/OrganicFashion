import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectHome } from '../../redux/content/selectors';
import styles from './Home.module.css';

const Home = () => {
  const homeData = useSelector(selectHome);

  return (
    <section className={styles.home}>
      <picture>
        <source
          srcSet={`${homeData.backgroundImages.hero.largeDesktop.x1} 1x, ${homeData.backgroundImages.hero.largeDesktop.x2} 2x`}
          media="(min-width: 1920px)"
        />
        <source
          srcSet={`${homeData.backgroundImages.hero.desktop.x1} 1x, ${homeData.backgroundImages.hero.desktop.x2} 2x`}
          media="(min-width: 1366px)"
        />
        <source
          srcSet={`${homeData.backgroundImages.hero.tablet.x1} 1x, ${homeData.backgroundImages.hero.tablet.x2} 2x`}
          media="(min-width: 992px)"
        />
        <source
          srcSet={`${homeData.backgroundImages.hero.mobile.x1} 1x, ${homeData.backgroundImages.hero.mobile.x2} 2x`}
          media="(max-width: 991px)"
        />
        <img
          src={homeData.backgroundImages.hero.mobile.x1}
          alt="Organic Fashion"
          className={styles.heroImage}
        />
      </picture>

      <div className={styles.content}>
        <h1 className={styles.title}>{homeData.title}</h1>
        <p className={styles.description}>{homeData.description}</p>
        <Link to="/shop" className={styles.shopButton}>
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Home;
