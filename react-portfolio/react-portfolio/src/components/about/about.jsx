import React from "react";
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
                  <h3>IOS Swift app developer</h3>
                  <p>I have been developing iOS applications using Swift and SwiftUI, 
                     focusing on clean architecture and intuitive UI design.</p>
               </div>
            </li>
            <li className={styles.aboutItem}>
               <img src={serverIcon}
               alt="Server icon" 
               />
               <div className={styles.aboutItemText}>
                  <h3>Frontend Developer</h3>
                  <p>I have experience building responsive and interactive website frontends using
                      modern technologies such as React and CSS frameworks.</p>
               </div>
            </li>
            <li className={styles.aboutItem}>
               <img src={uiIcon}
               alt="UI icon" 
               />
               <div className={styles.aboutItemText}>
                  <h3>Content creator</h3>
                  <p>I create content on YouTube about my school life, 
                     coding journey,software engineering topics.</p>
               </div>
            </li>
          </ul> 
      </div>
    </section>
};