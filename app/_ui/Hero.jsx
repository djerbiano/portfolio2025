import Image from "next/image";
import styles from "../page.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageContainer}>
        <Image src="/hero.png" alt="photo de saber" width={400} height={400} />
      </div>
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
