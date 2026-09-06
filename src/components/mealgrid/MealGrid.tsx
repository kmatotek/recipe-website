import { useEffect, useState } from "react";
import recipeService from "../../api/RecipeService";
import MealTile from "../mealtile/MealTile";
import styles from "./MealGrid.module.css";
import type { Recipe } from "../../types/Recipe";

function MealGrid({ category }) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data: Recipe[] = await recipeService.getRecipesByCategory(category);
      setRecipes(data);
    };

    fetchRecipes();
  }, [category]);

  return (
    <div className={styles.mealgrid}>
      {recipes.map((recipe) => (
        <MealTile key={recipe.id.timestamp} recipe={recipe} />
      ))}
    </div>
  );
}

export default MealGrid;
