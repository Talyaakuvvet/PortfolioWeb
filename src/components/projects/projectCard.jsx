import styles from "./projectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  return (
    <div className={styles.container}> 
      <img src={imageSrc} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          <li key={id}>{skill} className={styles.skill}</li>
        })}
      </ul>
      <div className={styles.links}>
        {demo && demo.trim() !== "" && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
          >
            Demo
          </a>
        )}
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>Source</a>
      </div>
    </div>
  );
};

