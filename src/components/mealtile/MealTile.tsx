import styles from "./MealTile.module.css";

function MealTile({ imageSrc }) {
  return (
    <div className={styles.mealtilecard}>
      <img
        className={styles.mealtileimage}
        src={imageSrc}
        alt="TODO: use food name"
      />
      <p className={styles.mealtilename}>food name</p>
      <p className={styles.mealtiletime}>30 min</p>
    </div>
  );
}

export default MealTile;

// picture
// name
// ad background card
