import type { Step } from "../../../types/Recipe";
import styles from "./Instructions.module.css";

type StepsProps = {
  steps: Step[];
};

export default function Instructions({ steps }: StepsProps) {
  return (
    <section className={styles.instructions}>
      <h2 className={styles.instructionstitle}>Steps</h2>

      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li className={styles.step} key={index}>
            <span className={styles.stepnumber}>{index + 1}</span>

            <p className={styles.steptext}>{step.instruction}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
