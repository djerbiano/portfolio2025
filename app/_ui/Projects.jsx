import { Fade } from "react-awesome-reveal";
import styles from "../page.module.css";
import OneProject from "./OneProject";
const src = "/sg2025.webp";
const alt = "photo de saber";

const data = [
  {
    src: "/Ecommerce/full1.jpg",
    alt: "Projet 1 - E-commerce full stack",
    link: "https://www.google.fr",
  },
  {
    src: "/ToReact/figmaToReact.jpg",
    alt: "Projet 2 - Legacy .NET to Modern React",
    link: "https://www.google.fr",
  },
];
export default function Projects() {
  return (
    <div className={styles.projectsContainer} id="realisation" tabIndex={0} aria-label="section des réalisations">
      <h2 className={styles.title}>RÉALISATIONS</h2>
      <div className={styles.projects}>
        <Fade direction="top" cascade damping={0.4}>
          {data.map((project, index) => (
            <OneProject key={index} src={project.src} alt={project.alt} link={project.link} />
          ))}
        </Fade>
      </div>
    </div>
  );
}
