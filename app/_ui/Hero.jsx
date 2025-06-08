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
      const textElements = container.current.querySelectorAll("p, h1, h2");
      let split = new SplitText(textElements, {
        type: "chars, words",
      });

      const tl = gsap.timeline();

      tl.from(split.chars, {
        y: 100,
        duration: 1,
        autoAlpha: 0,
        stagger: {
          amount: 0.5,
          from: "random",
        },
      });

      tl.from(buttonRef.current, {
        x: 50,
        duration: 2,
        autoAlpha: 0,
        duration: 0.8,
      });

      tl.from(
        imgContainer.current,
        {
          x: -50,
          duration: 2,
          autoAlpha: 0,
          duration: 0.8,
        },
        "-=1"
      );
    }
  });

  return (
    <div className={styles.heroContainer} id="hero">
      <ImgProfile animation={imgContainer} />
      <div className={styles.heroTextContainer} ref={container}>
        <p>Bonjour ! </p>
        <h1 className={styles.heroTitle}>Moi c&apos;est Saber.</h1>
        <h2 className={styles.heroTitle}>Développeur full-stack</h2>
        <p>Specialisé en MERN Stack, Java et Spring Boot.</p>
        <button ref={buttonRef} className={styles.highlight}>
          Télécharger mon CV
        </button>
      </div>
    </div>
  );
}

/*


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

  useGSAP(() => {
    if (container.current) {
      const textElements = container.current.querySelectorAll("p, h1, h2");
      let split = new SplitText(textElements, {
        type: "chars, words",
      });

      gsap.from(split.chars, {
        y: 100,
        duration: 1,
        autoAlpha: 0,
        stagger: {
          amount: 0.5,
          from: "random",
        },
      });
    }
  });
  return (
    <div className={styles.heroContainer} id="hero">
      <ImgProfile />
      <div className={styles.heroTextContainer} ref={container}>
        <p>Bonjour ! </p>
        <h1 className={styles.heroTitle}>Moi c&apos;est Saber.</h1>
        <h2 className={styles.heroTitle}>Développeur full-stack</h2>
        <p>Specialisé en MERN Stack, Java et Spring Boot.</p>
        <button className={styles.highlight}> Télécharger mon CV</button>
      </div>
    </div>
  );
}

*/
