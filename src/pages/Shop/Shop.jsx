import React from 'react';
import { useSelector } from 'react-redux';
import { selectShop } from '../../redux/content/selectors';
import styles from './Shop.module.css';

const Shop = () => {
  const shopData = useSelector(selectShop);

  return (
    <section className={styles.shop}>
      <h2 className={styles.title}>{shopData.title}</h2>
      <div className={styles.imageGrid}>
        {shopData.images.items.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <picture>
              <source
                srcSet={`${image.largeDesktop.x1} 1x, ${image.largeDesktop.x2} 2x`}
                media="(min-width: 1920px)"
              />
              <source
                srcSet={`${image.desktop.x1} 1x, ${image.desktop.x2} 2x`}
                media="(min-width: 1366px)"
              />
              <source
                srcSet={`${image.tablet.x1} 1x, ${image.tablet.x2} 2x`}
                media="(min-width: 992px)"
              />
              <source
                srcSet={`${image.mobile.x1} 1x, ${image.mobile.x2} 2x`}
                media="(max-width: 991px)"
              />
              <img
                src={image.mobile.x1}
                alt={`Shop Category ${index + 1}`}
                className={styles.image}
              />
            </picture>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
