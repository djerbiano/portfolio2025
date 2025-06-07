import styles from "../page.module.css";
import ImgProfile from "./ImgProfile";

export default function Hero() {
  return (
    <div className={styles.heroContainer} id="hero">
      <ImgProfile />
      <div className={styles.heroTextContainer}>
        <p>Bonjour !</p>
        <h1 className={styles.heroTitle}>Moi c&apos;est Saber.</h1>
        <h2 className={styles.heroTitle}>Développeur full-stack</h2>
        <p>Specialisé en MERN Stack, Java et Spring Boot.</p>
        <button className={styles.highlight}> Télécharger mon CV</button>
      </div>
    </div>
  );
}
