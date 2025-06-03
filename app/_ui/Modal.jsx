"use client";

import styles from "../page.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useContext } from "react";
import { DataContext } from "../context/dataProjects";
import { ModalContext } from "../context/modalContext";
import data from "../_lib/data";

export default function Modal() {
  const { indexDataProject } = useContext(DataContext);
  const { isOpen, setIsOpen } = useContext(ModalContext);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }

    //cleanup
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <IoIosCloseCircleOutline fill="#ff0000" onClick={() => setIsOpen(!isOpen)} />
        <h2>Description du projet :</h2>
        <p>{data[indexDataProject].description}</p>
        <h3>Difficultés rencontrées :</h3>
        <p>Aucune</p>
        <h4>Compétences développées :</h4>
        <p>{data[indexDataProject].competences}</p>
        <button className={styles.highlight} onClick={() => window.open(data[indexDataProject].lien, "_blank")}>
          Lien vers le projet
        </button>
      </div>
    </div>
  );
}
