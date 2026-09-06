import type { Recipe } from "../../types/Recipe";
import styles from "./MealTile.module.css";

interface MealTileProps {
  recipe: Recipe;
}

function MealTile({ recipe }: MealTileProps) {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className={styles.mealtilecard}>
      <img
        className={styles.mealtileimage}
        src={recipe.image}
        alt={recipe.name}
      />
      <p className={styles.mealtilename}>{recipe.title}</p>
      <p className={styles.mealtiletime}>{totalTime} mins</p>
    </div>
  );
}

export default MealTile;
