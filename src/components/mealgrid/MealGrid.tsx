import { useEffect, useState } from "react";
import recipeService from "../../api/RecipeService";
import MealTile from "../mealtile/MealTile";
import styles from "./MealGrid.module.css";

function MealGrid({ category }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const data: string[] = await recipeService.getImagesByCategory(category);
      setImages(data);
    };

    fetchImages();
  }, [category]);

  return (
    <div className={styles.mealgrid}>
      {images.map((image) => (
        <MealTile key={image} imageSrc={image} />
      ))}
    </div>
  );
}

export default MealGrid;
