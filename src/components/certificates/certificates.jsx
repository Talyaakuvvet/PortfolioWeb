import styles from "./certificates.module.css";

const certificates = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    image: "images/ml_specialization.png",
    link: "https://coursera.org/verify/XYZ123",
  },
  {
    title: "Deep Learning with PyTorch",
    issuer: "IBM Skills Network",
    image: "images/pytorch_certificate.png",
    link: "https://skills.network/certificate/ABC456",
  },
  {
    title: "Flutter Development Bootcamp",
    issuer: "App Brewery",
    image: "images/flutter_bootcamp.png",
    link: "https://udemy.com/certificate/DEF789",
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className={styles.section}>
      <h2 className={styles.heading}>Certificates</h2>
      <div className={styles.grid}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.card}>
            <img src={cert.image} alt={cert.title} className={styles.image} />
            <h3 className={styles.title}>{cert.title}</h3>
            <p className={styles.issuer}>{cert.issuer}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
