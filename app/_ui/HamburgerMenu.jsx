import styles from "../page.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgCloseR } from "react-icons/cg";

export default function HamburgerMenu({ open, setOpen }) {
  return (
    <div className={styles.hamburgerIcon} onClick={() => setOpen(!open)}>
      {open ? <CgCloseR color="#ffffff" /> : <RxHamburgerMenu color="#ffffff" />}
    </div>
  );
}
