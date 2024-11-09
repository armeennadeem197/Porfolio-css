import React from 'react';
import Image from 'next/image';
import styles from '@/styles/about.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.aboutSection}>
        <div className={styles.aboutImageWrapper}>
          <Image
            alt="profile pic"
            src="/images 111.jpg"
            height={700}
            width={400}
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.aboutContent}>
          <h1 className={styles.aboutTitle}>About Me</h1>
          <p className={styles.aboutDescription}>
            Hi, I am Armeen Nadeem, and I am a web developer. I specialize in creating
            responsive and interactive websites using technologies like HTML, CSS,
            JavaScript, and TypeScript. I am passionate about coding and enjoy building
            user-friendly web applications.
          </p>
          <div>
            <a href="https://resume-snowy-seven-41.vercel.app/">
              <button className={styles.downloadButton}>Download CV</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
