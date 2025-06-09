import styles from "../page.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgCloseR } from "react-icons/cg";

export default function HamburgerMenu({ open, setOpen }) {
  const label = open ? "Fermer le menu" : "Ouvrir le menu";
  return (
    <div
      className={styles.hamburgerIcon}
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      aria-label={label}
      aria-expanded={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen(!open);
        }
      }}
    >
      {open ? <CgCloseR color="#ffffff" /> : <RxHamburgerMenu color="#ffffff" />}
    </div>
  );
}
