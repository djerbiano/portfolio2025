import { Fade } from "react-awesome-reveal";
import styles from "../page.module.css";
import OneProject from "./OneProject";
export default function Projects() {
  return (
    <div className={styles.projectsContainer} id="realisation" tabIndex={0} aria-label="section des réalisations">
      <h2 className={styles.title}>RÉALISATIONS</h2>
        <div className={styles.projects}>
          <Fade direction="top" cascade damping={0.4}>
          {Array.from({ length: 3 }, (_, index) => (
            <OneProject key={index} index={index} />
          ))}
          </Fade>
        </div>
    </div>
  );
}
