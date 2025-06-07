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
    <div className={styles.contactContainer} id="contact">
      <p className={styles.title}>CONTACT</p>
      <p className={styles.subtitle}>Envoyez-moi un message !</p>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.contactAreaDesigneRight}></div>
        <div className={styles.contactAreaDesigneLeft}></div>
        
        <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
        {errors.name && <p className="text-red-600">{errors.name}</p>}
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p className="text-red-600">{errors.email}</p>}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        ></textarea>
        {errors.message && <p className="text-red-600">{errors.message}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
        {success && <p className="text-green-600">Message envoyé ✅</p>}
        {success === false && <p className="text-red-600">Erreur lors de l'envoi ❌</p>}
      </form>
    </div>
  );
}
