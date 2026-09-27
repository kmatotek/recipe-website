import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import recipeService from "../../api/RecipeService";
import type { Recipe } from "../../types/Recipe";
import { Link } from "react-router-dom";
import styles from "./RecipeSearchBar.module.css";

type RecipeSearchBarProps = {
  onClose: () => void;
};

const RecipeSearchBar = ({ onClose }: RecipeSearchBarProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchOverlayRef = useRef<HTMLDivElement>(null);

  // Prevent the page from scrolling while search is open
  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await recipeService.getAllRecipes();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  // Focus search input when the search overlay opens
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  // Close search when clicking outside of the search content
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchOverlayRef.current &&
        !searchOverlayRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Close search when pressing Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const searchResults = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleResultClick = () => {
    setSearchTerm("");
    onClose();
  };

  return (
    <div className={styles.searchOverlay}>
      <div className={styles.searchContent} ref={searchOverlayRef}>
        <button
          className={styles.closeButton}
          type="button"
          onClick={onClose}
          aria-label="Close search"
        >
          <X size={24} />
        </button>

        <div className={styles.searchHeader}>
          <h1>search recipes</h1>
        </div>

        <form
          className={styles.searchForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.searchWrapper}>
            <input
              ref={searchInputRef}
              className={styles.searchInput}
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder=""
              autoComplete="off"
            />

            <button
              className={styles.searchIconButton}
              type="button"
              onClick={() => searchInputRef.current?.focus()}
              aria-label="Focus search"
            >
              <Search size={22} />
            </button>
          </div>
        </form>

        {searchTerm.trim() !== "" && (
          <div className={styles.searchResults}>
            {searchResults.length > 0 ? (
              <>
                <ul>
                  {searchResults.map((result) => (
                    <li className={styles.searchResult} key={result.name}>
                      <Link
                        to={`/recipe/${result.name}`}
                        onClick={handleResultClick}
                      >
                        {result.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className={styles.noResults}>no recipes found :(</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeSearchBar;
