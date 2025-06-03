import Link from "next/link";
import styles from "../page.module.css";

export default function MentionsLegales() {
  return (
    <main className={styles.mentionsContent}>
      <div className={styles.mentionsContainer}>
        <h1>Mentions Légales</h1>

        <section className={styles.mentionSection}>
          <h2>Éditeur du site</h2>
          <p>
            <strong>Portfolio étudiant de</strong> : GHOUDI Saber
            <br />
            <strong>Statut</strong> : Étudiant en développement web
            <br />
            <strong>Contact</strong> :{" "}
            <a href="mailto:saberghoudi2222@hotmail.fr" title="Envoyer un mail à Saber">
              saberghoudi2222@hotmail.fr
            </a>
            <br />
            <strong>Adresse postale</strong> : Sur demande via email
          </p>
        </section>

        <section className={styles.mentionSection}>
          <h2>Hébergement</h2>
          <p>
            Ce portfolio est hébergé sur Vercel.
            <br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              Visiter vercel.com
            </a>
          </p>
        </section>
        <section className={styles.mentionSection}>
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble du contenu présent sur ce site (textes, images, logos, code, etc.) est, sauf mention contraire,
            la propriété exclusive de GHOUDI Saber.
            <br />
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle,
            est strictement interdite sans l’accord écrit préalable de l’auteur.
          </p>
        </section>
        <section className={styles.mentionSection}>
          <h2>Confidentialité</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle sans consentement.
            <br />
            Les éventuelles données de contact sont utilisées uniquement pour répondre aux demandes.
          </p>
        </section>
        <section className={styles.mentionSection}>
          <h2>Cookies</h2>
          <p>
            Ce site ne dépose aucun cookie de suivi ou de publicité.
            <br />
            Il peut utiliser des cookies techniques strictement nécessaires à son bon fonctionnement (ex. : pour la
            sécurité ou le rendu visuel).
          </p>
        </section>

        <section className={styles.mentionSection}>
          <h2>Responsabilité</h2>
          <p>
            L’auteur du site ne peut être tenu responsable d’éventuels dysfonctionnements ou erreurs présentes sur le
            site.
            <br />
            L’accès au site peut être suspendu pour maintenance, mise à jour ou tout autre motif technique sans préavis.
          </p>
        </section>
        <div className={styles.mentionsFooter}>
          <Link href="/" className={styles.backLink}>
            ← Retour au portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
