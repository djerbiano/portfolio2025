import styles from "../page.module.css";
import ImgProfile from "./ImgProfile";
export default function AboutMe() {
  return (
    <div className={styles.aboutContainer} id="presentation">
      <div className={styles.aboutTextContainer}>
      <p className={styles.title}>PRÉSENTATION</p>
        <p>
          Développeur full-stack spécialisé en MERN Stack (MongoDB, Express, React, Node.js), je développe des
          applications web modernes, rapides et évolutives. Basé à Brest, je suis passionné par le code, l’UX soignée et
          la performance côté client comme serveur. Mon objectif : transformer des idées en produits concrets et utiles
          grâce à des technologies robustes et à jour.
        </p>
      </div>
      <ImgProfile />
    </div>
  );
}
