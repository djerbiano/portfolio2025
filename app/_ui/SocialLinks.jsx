import styles from "../page.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <a
        href="https://www.linkedin.com/in/saber-g-ab6251207"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/djerbiano" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
    </div>
  );
}
