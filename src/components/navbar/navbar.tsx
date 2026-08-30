import styles from "./navbar.module.css";
import kopeLogo from "../../assets/kopelogo.png";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.listContainer}>
      <Link to="/" draggable="false">
        {" "}
        <img src={kopeLogo} alt="Kope Logo" className={styles.kopelogo} />
      </Link>

      <ul className={styles.navbar}>
        <li>
          <Link to="/breakfast_lunch" draggable="false">
            BREAKFAST & LUNCH
          </Link>
        </li>
        <li>
          <Link to="/appetizers_dinner" draggable="false">
            APPETIZERS & DINNER
          </Link>
        </li>
        <li>
          <Link to="/desserts_baked_goods" draggable="false">
            DESSERTS & BAKED GOODS
          </Link>
        </li>
      </ul>
    </div>
  );
}
