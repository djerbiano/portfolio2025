import styles from "../page.module.css";
export default function OneProject() {
  return (
    <div className={styles.project}>
      <h1>nom du projet</h1>
      <p>description</p>
      <img src="/project.png" alt="image du projet" />
   
    </div>
  );
}
