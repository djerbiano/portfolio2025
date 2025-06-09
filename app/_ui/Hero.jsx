"use client";
import styles from "../page.module.css";
import ImgProfile from "./ImgProfile";
import { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const container = useRef();
  const buttonRef = useRef();
  const imgContainer = useRef();

  useGSAP(() => {
    if (container.current && buttonRef.current && imgContainer.current) {
      gsap.set(container.current, { opacity: 1 });

      const textElements = container.current.querySelectorAll("p, h1, h2");
      let split = new SplitText(textElements, {
        type: "chars, words",
      });

      gsap.set(split.chars, { opacity: 0 });

      gsap.set(imgContainer.current, { visibility: "visible", opacity: 0 });

      const tl = gsap.timeline();

      tl.fromTo(
        split.chars,
        { y: 100, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, stagger: { amount: 0.5, from: "random" }, duration: 1 }
      );

      tl.fromTo(buttonRef.current, { x: 50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8 });

      tl.fromTo(imgContainer.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=1");
    }
  });

  return (
    <div className={styles.heroContainer} id="hero">
      <ImgProfile animation={imgContainer} initialHidden />
      <div className={styles.heroTextContainer} ref={container}>
        <p>Bonjour ! </p>
        <h1 className={styles.heroTitle}>Moi c&apos;est Saber.</h1>
        <h2 className={styles.heroTitle}>Développeur full-stack</h2>
        <p>Specialisé en MERN Stack, Java et Spring Boot.</p>
        <button ref={buttonRef} className={styles.highlight} tabIndex={0}>
          Télécharger mon CV
        </button>
      </div>
    </div>
  );
}
