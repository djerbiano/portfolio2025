




import Image from "next/image";
import styles from "../page.module.css";
export default function ImgProfile({ animation, initialHidden = false }) {
  return (
    <div
      className={styles.personnelImageContainer}
      ref={animation}
      style={initialHidden ? { opacity: 0, visibility: "hidden" } : {}}
    >
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
