import ImageSlider from "../components/imageslider/ImageSlider";
import Navbar from "../components/navbar/navbar";
import MealSection from "../components/mealsection/MealSection";

import { breakfastImages } from "../components/imageslider/Images";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <MealSection
        title="breakfast & lunch"
        images={breakfastImages}
        buttonLink="/breakfast_lunch"
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
