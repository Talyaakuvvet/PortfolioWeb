import aboutImage from '../../../assets/about/aboutImage.png';

import styles from "./about.module.css";


export const About = () => {
    return <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}> 
        <img 
          src={aboutImage}
          alt="Me sitting witha a laptop" 
          className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
               <div className={styles.aboutItemText}>
                  <h3>🧠 AI & ML Developer</h3>
                  <p>Exploring machine learning and artificial intelligence — from model training to real-world applications.</p>
               </div>
            </li>
            <li className={styles.aboutItem}>
               <div className={styles.aboutItemText}>
                  <h3>🍎 iOS Developer</h3>
                  <p>Building intuitive, elegant iOS apps using Swift and SwiftUI.</p>
               </div>
            </li>
            <li className={styles.aboutItem}>
               <div className={styles.aboutItemText}>
                  <h3>🎥 Content Creator</h3>
                  <p>Sharing my coding and tech journey on YouTube with simple, honest storytelling.</p>
               </div>
            </li>
          </ul> 
      </div>
    </section>
};