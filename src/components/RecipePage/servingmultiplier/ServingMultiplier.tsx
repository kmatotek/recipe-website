import styles from "./ServingMultiplier.module.css";

type ServingMultiplierProps = {
  multiplier: number;
  onChange: (value: number) => void;
};

export default function ServingMultiplier({
  multiplier,
  onChange,
}: ServingMultiplierProps) {
  return (
    <div className={styles.multiplier}>
      <button
        className={multiplier === 0.5 ? styles.active : styles.button}
        onClick={() => onChange(0.5)}
      >
        1/2x
      </button>

      <button
        className={multiplier === 1 ? styles.active : styles.button}
        onClick={() => onChange(1)}
      >
        1x
      </button>

      <button
        className={multiplier === 2 ? styles.active : styles.button}
        onClick={() => onChange(2)}
      >
        2x
      </button>
    </div>
  );
}
