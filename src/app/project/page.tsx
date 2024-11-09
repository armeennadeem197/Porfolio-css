import React from 'react'
import styles from '@/styles/project.module.css'

function Project() {
  const projects = [
    {
      title: "STATIC PROJECT",
      description: "A dynamic Resume built with HTML, CSS, and TypeScript.",
      videoSrc: "/q.mp4",
    },
    {
      title: "BLOOM & BLOSSOM FLOWER PROJECT",
      description: "An elegant project showcasing a flower shop's digital presence, designed with HTML, CSS, and TypeScript.",
      videoSrc: "/ac.mp4",
    },
    {
      title: "LAMA MAKEUP WEBSITES",
      description: "A sleek and modern website designed for a makeup brand, showcasing products and services with Next.js and Tailwind CSS.",
      videoSrc: "/ab.mp4",
    },
    {
      title: "Portfolio Project",
      description: "A Portfolio website built with Next.js and Tailwind.",
      videoSrc: "/q1.mp4",
    },
  ];

  return (
    <section className={styles.projectSection}>
      <header className={styles.header}>
        <h1>My Projects</h1>
      </header>

      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <article className={styles.projectCard} key={index}>
            <div className={styles.projectImageWrapper}>
              <a href={project.videoSrc} target="_blank" rel="noopener noreferrer">
                <video
                  title={`${project.title} Video`}
                  src={project.videoSrc}
                  className={styles.projectImage}
                  controls
                />
              </a>
            </div>
            <div className={styles.projectDetails}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.videoSrc} target="_blank" className={styles.projectLink}>
                Watch Project Video
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
