import Link from "next/link";
import styles from "../page.module.css";
import SocialLinks from "./SocialLinks";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinksContainer}>
        <SocialLinks />
      </div>
      <Link href="/mentions-legales" className={styles.btnMentionsLegales}>
        Mentions Légales
      </Link>
      <p>&copy; {new Date().getFullYear()} Saber GHOUDI. Tous droits réservés.</p>
    </footer>
  );
}
