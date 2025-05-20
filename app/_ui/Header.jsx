"use client";
import Link from "next/link";
import styles from "../page.module.css";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HamburgerMenu open={open} setOpen={setOpen} />
      <header className={` ${styles.header} ${open ? styles.openMenu : styles.closeMenu}`}>
        <nav>
          <Link href="#hero" onClick={() => setOpen(false)}>
            ACCUEIL
          </Link>
          <Link href="/#presentation" onClick={() => setOpen(false)}>
            PRÉSENTATION
          </Link>
          <Link href="/#realisation" onClick={() => setOpen(false)}>
            RÉALISATION
          </Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>
            CONTACT
          </Link>
        </nav>
      </header>
    </>
  );
}
