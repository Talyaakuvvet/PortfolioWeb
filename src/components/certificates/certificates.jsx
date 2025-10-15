import styles from "./certificates.module.css";

const certificates = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    link: "https://coursera.org/verify/specialization/4LQXVU22QZG0",
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    link: "https://coursera.org/verify/N6QG574WOZZB",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google",
    link: "https://coursera.org/verify/R0TRZQEAWL9L",
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className={styles.section}>
      <h2 className={styles.sectionTitle}>Certificates</h2>

      <div className={styles.grid}>
        {certificates.map((cert, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>{cert.title}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
            </div>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`${cert.title} sertifikasını görüntüle`}
              >
                View →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
