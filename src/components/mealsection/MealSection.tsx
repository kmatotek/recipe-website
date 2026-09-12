import { Link } from "react-router-dom";
import styles from "./MealSection.module.css";

type MealSectionProps = {
  title: string;
  backgroundImage: string;
  link: string;
};

export default function MealSection({
  title,
  backgroundImage,
  link,
}: MealSectionProps) {
  return (
    <Link
      to={link}
      className={styles.mealSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
