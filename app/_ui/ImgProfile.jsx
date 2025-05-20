import Image from "next/image";
import styles from "../page.module.css";
export default function ImgProfile() {
  return (
    <div className={styles.heroImageContainer}>
      <Image className={styles.heroImage} src="/hero.png" alt="photo de saber" width={400} height={400} />
    </div>
  );
}
