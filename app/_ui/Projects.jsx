import styles from "../page.module.css";
import OneProject from "./OneProject";
export default function Projects() {
  return (
    <div className={styles.projectsContainer} id="realisation">
      <h1>RÉALISATIONS</h1>
      <div className={styles.projects}>
        <OneProject />
        <OneProject />
        <OneProject />
      </div>
   
    </div>
  );
}
