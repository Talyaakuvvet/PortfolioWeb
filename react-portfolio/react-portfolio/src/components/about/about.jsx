import aboutImage from '../../../assets/about/aboutImage.png';
import cursorIcon from '../../../assets/about/cursorIcon.png';
import serverIcon from '../../../assets/about/serverIcon.png';
import uiIcon from '../../../assets/about/uiIcon.png';

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
               <img src={cursorIcon}
               alt="Cursor icon" 
               />
               <div className={styles.aboutItemText}>
                  <h3>🧠 AI & ML Developer</h3>
                  <p>Exploring machine learning and artificial intelligence — from model training to real-world applications.</p>
               </div>
            </li>
            <li className={styles.aboutItem}>
               <img src={serverIcon}
               alt="Server icon" 
               />
               <div className={styles.aboutItemText}>
                  <h3>🍎 iOS Developer</h3>
                  <p>Building intuitive, elegant iOS apps using Swift and SwiftUI.</p>
               </div>
            </li>
            <li className={styles.aboutItem}>
               <img src={uiIcon}
               alt="UI icon" 
               />
               <div className={styles.aboutItemText}>
                  <h3>🎥 Content Creator</h3>
                  <p>Sharing my coding and tech journey on YouTube with simple, honest storytelling.</p>
               </div>
            </li>
          </ul> 
      </div>
    </section>
};