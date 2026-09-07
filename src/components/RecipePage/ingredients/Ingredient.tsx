import { useState } from "react";
import type { Ingredient as IngredientType } from "../../../types/Recipe";
import styles from "./Ingredient.module.css";

type IngredientProps = {
  ingredient: IngredientType;
  multiplier: number;
};

export default function Ingredient({
  ingredient,
  multiplier,
}: IngredientProps) {
  const [checked, setChecked] = useState(false);

  const quantity = ingredient.quantity * multiplier;

  return (
    <li className={styles.ingredient}>
      <label className={styles.ingredientlabel}>
        <input
          className={styles.ingredientcheckbox}
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />

        <span className={checked ? styles.checked : styles.ingredienttext}>
          {quantity} {ingredient.unit} {ingredient.name}
        </span>
      </label>
    </li>
  );
}
