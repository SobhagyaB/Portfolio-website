import React from "react";
import Typewriter from "typewriter-effect"

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}><Typewriter
            options={{
              strings: ["Hi, I'm Sobhagya"],
              autoStart: true,
              loop: true,
              pauseFor: 2000, // Adjust the pause time before restarting
              deleteSpeed: 50, // Adjust the delete speed
            }}
          /></h1>
        <p className={styles.description}>
        I'm a frontend developer with knowledge of React js, <br /> HTML, CSS, and JavaScript. I'm passionate about building user-friendly applications and eager to apply my skills. 
        </p>
        <a href="https://drive.google.com/drive/folders/15l8IR-d_TCIBmOrDFTNp2ypGljy7Hdql" className={styles.contactBtn}>
          View Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/myimg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
