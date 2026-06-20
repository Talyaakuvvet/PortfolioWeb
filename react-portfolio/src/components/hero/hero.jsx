import styles from "./hero.module.css";

import heroImage from '../../../assets/hero/heroImage.png';

export const Hero = () => {
   return (
     <section className={styles.container}>
       <div className={styles.content}>
         <h1 className={styles.title}>Hi, I'm Talya</h1>
         <p className={styles.description}>
         I started with mobile apps, fell in love with AI, and ended up building drones that monitor forests.
Software Engineering graduate with a focus on computer vision and full-stack development.
Always curious, always building.
         </p>
         <a href="mailto:talyakuvvet04@gmail.com" className={styles.contactBtn}>
           Contact Me
         </a>
         <a href="/cv/TalyaKuvvet-CV-eng.pdf" className={styles.contactBtn} download>
            Download CV (English)
         </a>
         <a href="/cv/TalyaKuvvetCV-tr.pdf" className={styles.contactBtn} download>
            Download CV (Türkçe)
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

