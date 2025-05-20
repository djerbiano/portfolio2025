import styles from "../page.module.css";
import ImgProfile from "./ImgProfile";

export default function Hero() {
  return (
    <div className={styles.heroContainer} id="hero">
      <ImgProfile />
      <div className={styles.heroTextContainer}>
        <p>Bonjour !</p>
        <p>Moi c&apos;est Saber. </p>
        <p> Développeur full-stack </p>
        <p>Specialisé en MERN Stack, Java et Spring Boot.</p>
        <button className={styles.highlight}> Télécharger mon CV</button>
      </div>
    </div>
  );
}
