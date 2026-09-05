import Navbar from "../components/navbar/navbar";
import MealSection from "../components/mealsection/MealSection";

import recipeService from "../api/RecipeService";

const breakfastImages = await recipeService.getImagesByCategory("breakfast");

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
        title="appetizers & dinner"
        images={breakfastImages}
        buttonLink="/appetizers_dinner"
        variant="light"
      />

      <MealSection
        title="desserts & baked goods"
        images={breakfastImages}
        buttonLink="/desserts_baked_goods"
        variant="green"
      />
    </>
  );
}

export default Home;
