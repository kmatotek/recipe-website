import Navbar from "../components/navbar/navbar";
import MealGrid from "../components/mealgrid/MealGrid";
import styles from "./Breakfast.module.css";

export default function Dinner() {
  return (
    <body className={styles.recipebody}>
      <Navbar></Navbar>
      <MealGrid category={"dinner"} />
    </body>
  );
}
