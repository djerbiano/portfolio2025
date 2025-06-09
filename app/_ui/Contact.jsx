"use client";
import { useState } from "react";
import styles from "../page.module.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.details?.fieldErrors || {});
        setSuccess(false);
        return;
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.contactContainer} id="contact" tabIndex={0} aria-label="section de contact">
      <h2 className={styles.title}>CONTACT</h2>
      <p className={styles.subtitle}>Envoyez-moi un message !</p>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.contactAreaDesigneRight}></div>
        <div className={styles.contactAreaDesigneLeft}></div>
        <label htmlFor="name" className={styles.hiddenLabel}>
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          aria-label="nom"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className={styles.formTextError}>{errors.name}</p>}
        <label htmlFor="email" className={styles.hiddenLabel}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          aria-label="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className={styles.formTextError}>{errors.email}</p>}
        <label htmlFor="message" className={styles.hiddenLabel}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          aria-label="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        ></textarea>
        {errors.message && <p className={styles.formTextError}>{errors.message}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
        {success && <p className="text-green-600">Message envoyé ✅</p>}
        {success === false && <p className={styles.formTextError}>Erreur lors de l'envoi ❌</p>}
      </form>
    </div>
  );
}
