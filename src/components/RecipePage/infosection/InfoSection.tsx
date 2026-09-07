import styles from "./InfoSection.module.css";

type InfoSectionProps = {
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
};

export default function InfoSection({
  prepTime,
  cookTime,
  totalTime,
  servings,
}: InfoSectionProps) {
  return (
    <section className={styles.infosection}>
      <div className={styles.infoitem}>
        <p className={styles.infolabel}>Prep Time</p>
        <p className={styles.infovalue}>{prepTime} min</p>
      </div>

      <div className={styles.infoitem}>
        <p className={styles.infolabel}>Cook Time</p>
        <p className={styles.infovalue}>{cookTime} min</p>
      </div>

      <div className={styles.infoitem}>
        <p className={styles.infolabel}>Total Time</p>
        <p className={styles.infovalue}>{totalTime} min</p>
      </div>

      <div className={styles.infoitem}>
        <p className={styles.infolabel}>Servings</p>
        <p className={styles.infovalue}>{servings}</p>
      </div>
    </section>
  );
}
