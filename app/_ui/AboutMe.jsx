"use client";
import styles from "../page.module.css";
import ImgProfile from "./ImgProfile";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imgContainer = useRef(null);

  useGSAP(() => {
    if (containerRef.current && textRef.current && imgContainer.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
          // pin: true,
          markers: true,
        },
      });

      tl.fromTo(
        textRef.current.children,
        { y: 50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, stagger: 0.3, duration: 2, ease: "power3.out" }
      );

      tl.fromTo(
        imgContainer.current,
        { scale: 0.9, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 2, ease: "power3.out" },
        "-=2"
      );
    }
  });

  return (
    <div className={styles.aboutContainer} id="presentation" ref={containerRef} tabIndex={0} aria-label="presentation">
      <div className={styles.aboutTextContainer} ref={textRef}>
        <h2 className={`${styles.title} ${styles.aboutTitle}`}>PRÉSENTATION</h2>
        <p>
          Développeur full-stack spécialisé en MERN Stack (MongoDB, Express, React, Node.js), je développe des
          applications web modernes, rapides et évolutives. Basé à Brest, je suis passionné par le code, l’UX soignée et
          la performance côté client comme serveur. Mon objectif : transformer des idées en produits concrets et utiles
          grâce à des technologies robustes et à jour.
        </p>
      </div>
      <ImgProfile animation={imgContainer} initialHidden />
    </div>
  );
}
