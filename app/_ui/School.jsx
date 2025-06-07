import styles from "../page.module.css";
import { Fade } from "react-awesome-reveal";
export default function School() {
  // Données des expériences
  const formations = [
    {
      date: "2008",
      title: "Technicien en maintenance informatique",
      subtitle: "Djerba, Tunisie",
    },
    {
      date: "2013",
      title: "Agent de prévention et sécurité",
      subtitle: "Brest, France",
    },
    {
      date: "2014",
      title: "Agent de service de sécurité incendie",
      subtitle: "Brest, France",
    },
    {
      date: "2017",
      title: "Chef d’équipe de service de sécurité incendie",
      subtitle: "Brest, France",
    },
    {
      date: "2025",
      title: "Développeur Fullstack JavaScript",
      subtitle: "Brest, France",
    },
  ];
  return (
    <div className={styles.containerEtudes}>
      <h2 className={`${styles.title} ${styles.titleEtude}`}>
        <span className={styles.emojiEtudes}>🎓</span> ÉTUDES
      </h2>
      <div className={styles.wrapperCards}>
        <Fade direction="left" cascade damping={0.2}>
          {formations.map((form, index) => (
            <div key={index} className={styles.cardFormation}>
              <span className={styles.cardDate}>{form.date}</span>
              <h3 className={styles.cardTitle}>{form.title}</h3>
              <p className={styles.cardSubtitle}>{form.subtitle}</p>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
