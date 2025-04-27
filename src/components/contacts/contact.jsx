import React from "react";
import emailIcon from '../../../assets/contact/emailIcon.png';
import githubIcon from '../../../assets/contact/githubIcon.png';
import linkedinIcon from '../../../assets/contact/linkedinIcon.png';

import styles from "./contact.module.css";

export const Contact = () => {
   return ( <footer id="contact" className={styles.container}>
      <div className={styles.text}>
         <h2>Contact</h2>
         <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
          <li className={styles.link}>
            <img src={emailIcon} alt="Email icon" />
            <a href="mailto:talyakuvvet04@gmail.com">talyakuvvet04@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={linkedinIcon} alt="Linkedin icon" />
            <a href="https://www.linkedin.com/in/talya-kuvvet-56939726b/">linkedin.com/talya-kuvvet</a>
          </li>
          <li className={styles.link}>
            <img src={githubIcon} alt="Github icon" />
            <a href="https://github.com/Talyaakuvvet">github.com/Talyaakuvvet</a>
          </li>
      </ul>
   </footer>
   );
}