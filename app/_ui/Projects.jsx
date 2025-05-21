import styles from "../page.module.css";
import OneProject from "./OneProject";
export default function Projects() {
  return (
    <div className={styles.projectsContainer} id="realisation">
      <p className={styles.title}>RÉALISATIONS</p>
      <div className={styles.projects}>
        <OneProject />
        <OneProject />
        <OneProject />
      </div>
    </div>
  );
}
