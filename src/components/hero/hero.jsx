import React from "react";
import styles from "./hero.module.css";

import heroImage from '../../../assets/hero/heroImage.png';

export const Hero = () => {
   return (
     <section className={styles.container}>
       <div className={styles.content}>
         <h1 className={styles.title}>Hi, I'm Talya</h1>
         <p className={styles.description}>
         I am a third-year Software Engineering student specializing in iOS development.
Recently, I developed a strong interest in artificial intelligence and have been expanding
my knowledge in this area. Reach out if you'd like to learn more!
         </p>
         <a href="mailto:talyakuvvet04@gmail.com" className={styles.contactBtn}>
           Contact Me
         </a>
       </div>
       <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
       />
       <div className={styles.topBlur} />
       <div className={styles.bottomBlur} />
     </section>
   );
 };

