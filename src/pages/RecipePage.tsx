import Navbar from "../components/navbar/navbar";
import { useParams } from "react-router-dom";
import recipeService from "../api/RecipeService";
import { useEffect, useState } from "react";
import type { Recipe } from "../types/Recipe";
import InfoSection from "../components/RecipePage/infosection/InfoSection";
import Ingredients from "../components/RecipePage/ingredients/Ingredients";
import Instructions from "../components/RecipePage/instructions/Instructions";
import styles from "./RecipePage.module.css";

export default function RecipePage() {
  const { name } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!name) return;

      const data = await recipeService.getRecipByName(name);
      setRecipe(data);
    };

    fetchRecipe();
  }, [name]);

  if (!recipe) {
    return (
      <>
        <Navbar />
        <main className={styles.recipepage}>
          <p>Loading recipe...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className={styles.recipepage}>
        <div className={styles.recipecard}>
          <div className={styles.recipeheader}>
            <h1 className={styles.recipetitle}>{recipe.title}</h1>

            <img
              className={styles.recipeimage}
              src={recipe.image}
              alt={recipe.title}
            />

            <InfoSection
              prepTime={recipe.prepTime}
              cookTime={recipe.cookTime}
              totalTime={recipe.prepTime + recipe.cookTime}
              servings={recipe.servings}
            />
          </div>

          <Ingredients ingredients={recipe.ingredients} />

          <Instructions steps={recipe.steps} />
        </div>
      </main>
    </>
  );
}
