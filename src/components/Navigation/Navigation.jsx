import React from 'react';
import { useSelector } from 'react-redux';
import { selectNavigation } from '../../redux/content/selectors';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = ({ isMobile, closeMenu }) => {
  const links = useSelector(selectNavigation);

  return (
    <nav className={isMobile ? styles.mobileNav : styles.desktopNav}>
      {links.map(link => (
        <Link
          key={link.id}
          to={link.path}
          onClick={isMobile ? closeMenu : undefined}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
