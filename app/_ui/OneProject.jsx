

"use client";
import styles from "../page.module.css";
import Image from "next/image";
import { useContext } from "react";
import { DataContext } from "../context/dataProjects";
import { ModalContext } from "../context/modalContext";
export default function OneProject({ index }) {
  const { setIndexDataProject } = useContext(DataContext);
  const { isOpen, setIsOpen } = useContext(ModalContext);
  return (
    <div
      className={styles.project}
      onClick={() => {
        setIsOpen(true), setIndexDataProject(index);
      }}
    >
      <Image className={styles.projectImage} src="/project1.png" alt="image du projet" width={400} height={400} />
    </div>
  );
}
