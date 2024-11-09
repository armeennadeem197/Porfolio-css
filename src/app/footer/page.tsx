

import React from 'react';
import styles from '@/styles/footer.module.css';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <span className={styles.footerName}>Armeen Nadeem</span>
        </div>
        <div className={styles.footerRight}>
          <p className={styles.footerText}>
            Copyright © 2024 ARMEENNADEEM - 
            <a className={styles.emailLink} href="mailto:armeennadeem9@gmail.com">armeennadeem9@gmail.com</a>
          </p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
