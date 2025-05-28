import styles from "../page.module.css";
export default function Contact() {
  return (
    <div className={styles.contactContainer} id="contact">
      <p className={styles.title}>CONTACT</p>
      <p className={styles.subtitle}>Envoyez-moi un message !</p>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
