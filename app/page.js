import { Schibsted_Grotesk } from "next/font/google";
import styles from "./page.module.css";
import Header from "./_ui/Header";
import Hero from "./_ui/Hero";
import AboutMe from "./_ui/AboutMe";
import Projects from "./_ui/Projects";
import Experience from "./_ui/Experience";
import School from "./_ui/School";
import Contact from "./_ui/Contact";
import Modal from "./_ui/Modal";
import Footer from "./_ui/Footer";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (
    <div className={`${schibsted.className}` + " " + styles.container}>
      <main className={styles.main}>
        <Modal />
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
        <School />
        <Contact />
        <Footer />
    
      </main>
    </div>
  );
}
