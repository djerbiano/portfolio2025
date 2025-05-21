import styles from "../page.module.css";
import Image from "next/image";
export default function OneProject() {
  return (
    <div className={styles.project}>
      <p>nom du projet</p>
      <Image src="/mask3.png" alt="image du projet" width={400} height={400} />
    </div>
  );
}
