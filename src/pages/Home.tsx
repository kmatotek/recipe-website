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
        backgroundImage={breakfastImages[0]}
        link="/breakfast"
      />

      <MealSection
        title="dinner"
        backgroundImage={dinnerImages[0]}
        link="/dinner"
      />

      <MealSection
        title="desserts"
        backgroundImage={dessertImages[0]}
        link="/dessert"
      />
    </>
  );
}

export default Home;
