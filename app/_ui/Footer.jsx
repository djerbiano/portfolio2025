import Link from "next/link";
import styles from "../page.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Saber GHOUDI. Tous droits réservés.</p>
      <Link href="/mentions-legales" className={styles.btnMentionsLegales}>
        Mentions Légales
      </Link>
    </footer>
  );
}
