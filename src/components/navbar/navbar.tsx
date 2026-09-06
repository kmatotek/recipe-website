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
          <Link to="/breakfast" draggable="false">
            BREAKFAST
          </Link>
        </li>
        <li>
          <Link to="/dinner" draggable="false">
            DINNER
          </Link>
        </li>
        <li>
          <Link to="/dessert" draggable="false">
            DESSERTS
          </Link>
        </li>
      </ul>
    </div>
  );
}
