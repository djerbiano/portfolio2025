import Image from "next/image";
import { Schibsted_Grotesk } from "next/font/google";
import styles from "./page.module.css";
import Header from "./_ui/Header";
import Hero from "./_ui/Hero";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (
    <div className={schibsted.className}>
      <main>
        <Header />
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
}
