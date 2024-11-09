import React from 'react';
import Image from 'next/image';
import styles from '@/styles/hero.module.css';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            className={styles.heroImage}
            alt="hero"
            src="/images 111.jpg"
            height={700}
            width={500}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hello, I am Armeen Nadeem
            <br />
            <span>
              FULL STACK <br /> DEVELOPER <br /> & UI/UX DESIGNER
            </span>
          </h1>
          <p className={styles.heroDescription}>
            Explore my web development journey, featuring projects, skills,
            and a functional contact form that delivers direct email responses.
            Showcasing my passion for creating interactive and user-friendly websites!
          </p>
          <div className={styles.heroIcons}>
            <a
              href="https://github.com/armeennadeem197"
              className={styles.heroIconLink}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/armeen-nadeem-4400702b7"
              className={styles.heroIconLink}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
