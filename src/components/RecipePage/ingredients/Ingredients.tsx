import { useState } from "react";
import type { Ingredient as IngredientType } from "../../../types/Recipe";
import Ingredient from "./Ingredient";
import ServingMultiplier from "../servingmultiplier/ServingMultiplier";
import styles from "./Ingredients.module.css";

type IngredientsProps = {
  ingredients: IngredientType[];
};

export default function Ingredients({ ingredients }: IngredientsProps) {
  const [multiplier, setMultiplier] = useState(1);

  return (
    <section className={styles.ingredients}>
      <h2 className={styles.ingredientstitle}>Ingredients</h2>

      <ServingMultiplier multiplier={multiplier} onChange={setMultiplier} />

      <ul className={styles.ingredientlist}>
        {ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            multiplier={multiplier}
          />
        ))}
      </ul>
    </section>
  );
}
