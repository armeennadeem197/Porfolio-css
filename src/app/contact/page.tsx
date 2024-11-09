import React from 'react';
import styles from '@/styles/contact.module.css';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <section className={styles.contactSection}>
        <div className={styles.contactWrapper}>
          <h1 className={styles.contactTitle}>Contact Me</h1>

          <div className={styles.formWrapper}>
            {/* Name Field */}
            <div className={styles.inputWrapper}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className={styles.inputWrapper}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div className={styles.inputWrapper}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Enter your message"
              />
            </div>

            {/* Submit Button */}
            <div className={styles.submitWrapper}>
              <button className={styles.submitButton}>Submit</button>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <a href="mailto:armeennadeem9@gmail.com" className={styles.contactEmail}>
                armeennadeem9@gmail.com
              </a>
              <span className={styles.contactSocial}>Follow me on social media!</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
