import { useState } from "react";
import styles from "./navbar.module.css";
import kopeLogo from "../../assets/kopelogo.png";
import { Search } from "lucide-react";

import { Link } from "react-router-dom";
import RecipeSearchBar from "../search/RecipeSearchBar";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className={styles.listContainer}>
      <div className={styles.navbarTop}>
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

        <button
          className={styles.searchButton}
          type="button"
          onClick={() => setIsSearchOpen(true)}
          aria-label="Search recipes"
        >
          <Search size={21} />
        </button>
      </div>

      {isSearchOpen && (
        <RecipeSearchBar onClose={() => setIsSearchOpen(false)} />
      )}
    </div>
  );
}
