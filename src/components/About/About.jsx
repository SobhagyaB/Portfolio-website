import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/abtimg.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Who I Am</h3>
              <p>
              I am a dedicated frontend developer with a passion for building interactive and responsive web applications using React, HTML, CSS, and JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>What I Do</h3>
              <p>
              I specialize in creating user-friendly applications with a focus on design and functionality. My projects showcase dynamic features, API integration, and optimized performance, ensuring responsiveness and cross-browser compatibility.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>What I'm Looking For</h3>
              <p>
              As a fresher, I'm eager to apply my skills to real-world projects, collaborate with teams, and grow as a developer while making a meaningful impact in the tech industry.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
