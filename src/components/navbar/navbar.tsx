import styles from "./navbar.module.css";
import kopeLogo from "../../assets/kopelogo.png";

export default function Navbar() {
  return (
    <div className={styles.listContainer}>
      <img src={kopeLogo} alt="Kope Logo" className={styles.kopelogo} />
      <ul className={styles.navbar}>
        <li>BREAKFAST & LUNCH</li>
        <li>APPETIZERS & DINNER</li>
        <li>DESSERTS & BAKED GOODS</li>
      </ul>
    </div>
  );
}
