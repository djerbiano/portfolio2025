import Image from "next/image";
import { Schibsted_Grotesk } from "next/font/google";
import styles from "./page.module.css";
import Header from "./_ui/Header";
import Hero from "./_ui/Hero";
import AboutMe from "./_ui/AboutMe";
import Projects from "./_ui/Projects";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (
    <div className={`${schibsted.className}` + " " + styles.container}>
      <main className={styles.main}>
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
      </main>
      <footer></footer>
    </div>
  );
}
