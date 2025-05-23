import React from 'react';
import { useSelector } from 'react-redux';
import { selectAboutUs } from '../../redux/content/selectors';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  const aboutUsData = useSelector(selectAboutUs);

  return (
    <section className={styles.aboutUs}>
      <div className={styles.imageContainer}>
        <picture>
          <source
            srcSet={`${aboutUsData.backgroundImages.aboutBg.largeDesktop.x1} 1x, ${aboutUsData.backgroundImages.aboutBg.largeDesktop.x2} 2x`}
            media="(min-width: 1920px)"
          />
          <source
            srcSet={`${aboutUsData.backgroundImages.aboutBg.desktop.x1} 1x, ${aboutUsData.backgroundImages.aboutBg.desktop.x2} 2x`}
            media="(min-width: 1366px)"
          />
          <source
            srcSet={`${aboutUsData.backgroundImages.aboutBg.tablet.x1} 1x, ${aboutUsData.backgroundImages.aboutBg.tablet.x2} 2x`}
            media="(min-width: 992px)"
          />
          <source
            srcSet={`${aboutUsData.backgroundImages.aboutBg.mobile.x1} 1x, ${aboutUsData.backgroundImages.aboutBg.mobile.x2} 2x`}
            media="(max-width: 991px)"
          />
          <img
            src={aboutUsData.backgroundImages.aboutBg.mobile.x1}
            alt="About Us"
            className={styles.image}
          />
        </picture>
      </div>

      <div className={styles.textContainer}>
        <h2 className={styles.title}>{aboutUsData.title}</h2>
        <p className={styles.description} data-order="first">
          {aboutUsData.descriptionFirst}
        </p>
        <p className={styles.description} data-order="second">
          {aboutUsData.descriptionSecond}
        </p>
        <button className={styles.loadMoreBtn}>Learn More</button>
      </div>
    </section>
  );
};

export default AboutUs;
