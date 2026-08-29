import styles from "./navbar.module.css";
import kopeLogo from "../../assets/kopelogo.png";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.listContainer}>
      <img src={kopeLogo} alt="Kope Logo" className={styles.kopelogo} />
      <ul className={styles.navbar}>
        <li>
          <Link to="/breakfast_lunch">BREAKFAST & LUNCH</Link>
        </li>
        <li>
          <Link to="/appetizers_dinner">APPETIZERS & DINNER</Link>
        </li>
        <li>
          <Link to="/desserts_baked_goods">DESSERTS & BAKED GOODS</Link>
        </li>
      </ul>
    </div>
  );
}
