import Navbar from "../components/navbar/navbar";
import MealGrid from "../components/mealgrid/MealGrid";
import styles from "./Breakfast.module.css";

export default function Breakfast() {
  return (
    <div className={styles.recipebody}>
      <Navbar></Navbar>
      <MealGrid category={"breakfast"} />
    </div>
  );
}
