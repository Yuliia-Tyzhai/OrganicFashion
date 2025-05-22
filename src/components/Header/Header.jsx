import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMobileMenuState } from '../../redux/mobileMenu/selectors';
import { selectHeader } from '../../redux/content/selectors';
import {
  toggleMobileMenu,
  closeMobileMenu,
} from '../../redux/mobileMenu/slice';

import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';

const burgerIcon = '/public/icons/burger-icon.svg';
const closeIcon = '/public/icons/close-icon.svg';

const Header = () => {
  const logoText = useSelector(selectHeader);
  const isOpen = useSelector(selectMobileMenuState);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          {logoText}
        </Link>

        <div className={styles.desktopNav}>
          <Navigation isMobile={false} />
        </div>

        <button
          className={styles.burgerButton}
          onClick={() => dispatch(toggleMobileMenu())}
        >
          <img src={burgerIcon} alt="Menu" />
        </button>

        {isOpen && (
          <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
            <button
              className={styles.closeButton}
              onClick={() => dispatch(closeMobileMenu())}
            >
              <img src={closeIcon} alt="Close Menu" />
            </button>
            <Navigation
              isMobile={true}
              closeMenu={() => dispatch(closeMobileMenu())}
            />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
