import Navbar from "../components/navbar/navbar";
import MealSection from "../components/mealsection/MealSection";

import recipeService from "../api/RecipeService";

const breakfastImages = await recipeService.getImagesByCategory("breakfast");
const dinnerImages = await recipeService.getImagesByCategory("dinner");
const dessertImages = await recipeService.getImagesByCategory("dessert");

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <MealSection
        title="breakfast"
        images={breakfastImages}
        buttonLink="/breakfast"
        variant="cream"
      />

      <MealSection
        title="dinner"
        images={dinnerImages}
        buttonLink="/dinner"
        variant="light"
      />

      <MealSection
        title="desserts"
        images={dessertImages}
        buttonLink="/dessert"
        variant="green"
      />
    </>
  );
}

export default Home;
