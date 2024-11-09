'use client';  // Ensure client-side rendering

import { useState } from 'react';
import styles from '@/styles/navbar.module.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle side menu visibility
  const toggleSideMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div>
      {/* Main Navbar */}
      <nav className={styles.navbar}>
        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={toggleSideMenu}>
          &#9776; {/* This is the hamburger icon */}
        </div>

        {/* Side Menu */}
        <div className={`${styles.sideMenu} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.cut} onClick={toggleSideMenu}>
            &times; {/* Close button for the side menu */}
          </div>
          <ul>
            <li><a onClick={toggleSideMenu} href="/">Home</a></li>
            <li><a onClick={toggleSideMenu} href="/about">About</a></li>
            <li><a onClick={toggleSideMenu} href="/skill">Skill</a></li>
            <li><a onClick={toggleSideMenu} href="/project">Project</a></li>
            <li><a onClick={toggleSideMenu} href="/services">Services</a></li>
            <li><a onClick={toggleSideMenu} href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Branding */}
        <div className={styles.name}>
          Portfolio
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navigation}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skill">Skill</a></li>
          <li><a href="/project">Project</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
