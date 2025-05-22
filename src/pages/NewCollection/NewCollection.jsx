import React from 'react';
import { useSelector } from 'react-redux';
import { selectNewCollection } from '../../redux/content/selectors';
import styles from './NewCollection.module.css';

const NewCollection = () => {
  const newCollectionData = useSelector(selectNewCollection);

  return (
    <section className={styles.newCollection}>
      <h2 className={styles.title}>{newCollectionData.title}</h2>

      <div className={styles.imageGrid}>
        {newCollectionData.images.items.map((image, index) => (
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
                alt={`New Collection ${index + 1}`}
                className={styles.image}
              />
            </picture>
          </div>
        ))}
      </div>
      <p className={styles.description}>{newCollectionData.description}</p>
    </section>
  );
};

export default NewCollection;
