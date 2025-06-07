import Image from "next/image";
import styles from "../page.module.css";
export default function ImgProfile() {
  return (
    <div className={styles.personnelImageContainer}>
      <Image
        className={styles.personnelImage}
        src="/sg2025.webp"
        alt="photo de saber"
        width={768}
        height={512}
        priority
      />
    </div>
  );
}
