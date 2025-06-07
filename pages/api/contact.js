import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit avoir au moins 2 caractères"),
  email: z.string().email("Veuillez fournir une adresse email valide"),
  message: z.string().min(10, "Le message doit avoir au moins 10 caractères"),
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.flatten(),
    });
  }

  const { name, email, message } = result.data;
  const formattedMessage = message.replace(/\n/g, "<br/>");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEPTION_EMAIL,
      subject: `Nouveau message de ${name}`,
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${formattedMessage}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Portfolio GHOUDI Saber" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Copie de votre message à GHOUDI Saber",
      html: `
        <p>Bonjour ${name},</p>
        <p>Merci pour votre message. Voici une copie :</p>
        <hr/>
        <p>${formattedMessage}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur Nodemailer:", error);
    return res.status(500).json({ error: "Erreur serveur", details: error.message });
  }
}
