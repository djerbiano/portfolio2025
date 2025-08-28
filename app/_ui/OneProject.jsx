"use client";
import styles from "../page.module.css";
import Image from "next/image";

export default function OneProject({src,alt,link}) {
  return (
    <div className={styles.project} onClick={() => window.open(link, "_blank")}>
      <Image
        className={styles.projectImage}
        src={src}
        alt={alt}
        width={800}
        height={800}
      />
    </div>
  );
}
