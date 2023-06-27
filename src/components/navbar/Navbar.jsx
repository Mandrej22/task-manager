import React from 'react';
import styles from './Navbar.module.scss';

function Navbar({ currentPage, setCurrentPage }) {
  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className={styles['navbar']}>
      <a 
        href="#" 
        onClick={() => navigate('home')} 
        className={`${styles['navbar-link']} ${currentPage === 'home' ? styles['active'] : ''}`}
      >
        Home
      </a>
      <a 
        href="#" 
        onClick={() => navigate('manage')} 
        className={`${styles['navbar-link']} ${currentPage === 'manage' ? styles['active'] : ''}`}
      >
        Manage Tasks
      </a>
    </nav>
  );
}

export default Navbar;
