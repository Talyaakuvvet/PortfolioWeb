import styles from "./hero.module.css";

import heroImage from '../../../assets/hero/heroImage.png';

export const Hero = () => {
   return (
     <section className={styles.container}>
       <div className={styles.content}>
         <h1 className={styles.title}>Hi, I'm Talya</h1>
         <p className={styles.description}>
         I am a senior Software Engineering student at Atlas University. I have past experience in Swift projects and basic web technologies. Recently, my main focus has shifted to artificial intelligence.
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

