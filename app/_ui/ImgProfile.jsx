import Image from "next/image";
import styles from "../page.module.css";
export default function ImgProfile() {
  return (
    <div className={styles.heroImageContainer}>
      <Image className={styles.heroImage} src="/sg2025.webp" alt="photo de saber" width={768} height={512} priority />
    </div>
  );
}
