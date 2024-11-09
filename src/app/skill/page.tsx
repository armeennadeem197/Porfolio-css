import React from 'react';
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from 'react-icons/si';
import styles from '@/styles/skill.module.css'; // Ensure your CSS file is correctly linked

function Skill() {
  return (
    <div className={styles.skillContainer}>
      <h1 className={styles.sectionTitle}>My Skills</h1>
      <div className={styles.skillsWrapper}>
        {/* HTML Skill */}
        <div className={styles.skillItem}>
          <div className={styles.iconWrapper}>
            <FaHtml5 size={50} color="#E34F26" />
          </div>
          <div className={styles.skillInfo}>
            <h2>HTML</h2>
            <div className={styles.skillBar}>
              <div className={styles.skillProgress} style={{ width: '100%' }}></div>
            </div>
            <p>100%</p>
          </div>
        </div>

        {/* CSS Skill */}
        <div className={styles.skillItem}>
          <div className={styles.iconWrapper}>
            <FaCss3Alt size={50} color="#1572B6" />
          </div>
          <div className={styles.skillInfo}>
            <h2>CSS</h2>
            <div className={styles.skillBar}>
              <div className={styles.skillProgress} style={{ width: '95%' }}></div>
            </div>
            <p>95%</p>
          </div>
        </div>

        {/* TypeScript Skill */}
        <div className={styles.skillItem}>
          <div className={styles.iconWrapper}>
            <SiTypescript size={50} color="#3178C6" />
          </div>
          <div className={styles.skillInfo}>
            <h2>TypeScript</h2>
            <div className={styles.skillBar}>
              <div className={styles.skillProgress} style={{ width: '90%' }}></div>
            </div>
            <p>90%</p>
          </div>
        </div>

        {/* Next.js Skill - Using an emoji or a different icon */}
        <div className={styles.skillItem}>
          <div className={styles.iconWrapper}>
            {/* Consider using an SVG or custom icon for Next.js */}
            <span role="img" aria-label="nextjs">⚛️</span>
          </div>
          <div className={styles.skillInfo}>
            <h2>Next.js</h2>
            <div className={styles.skillBar}>
              <div className={styles.skillProgress} style={{ width: '60%' }}></div>
            </div>
            <p>60%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
