import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "GHOUDI Saber | Portfolio",
  description:
    "Portfolio de GHOUDI Saber, développeur web basé à Brest, spécialisé en MERN Stack, Java et Spring Boot. Découvrez ses projets, compétences et parcours professionnel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
