import Navbar from "../components/navbar/navbar";
import MealGrid from "../components/mealgrid/MealGrid";
import styles from "./Breakfast.module.css";

export default function Dessert() {
  return (
    <body className={styles.recipebody}>
      <Navbar></Navbar>
      <MealGrid category={"dessert"} />
    </body>
  );
}
