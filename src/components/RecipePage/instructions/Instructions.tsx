import { useState } from "react";
import type { Step } from "../../../types/Recipe";
import styles from "./Instructions.module.css";

type StepsProps = {
  steps: Step[];
};

export default function Instructions({ steps }: StepsProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const toggleStep = (index: number) => {
    setCompletedSteps((previous) => {
      const updated = new Set(previous);

      if (updated.has(index)) {
        updated.delete(index);
      } else {
        updated.add(index);
      }

      return updated;
    });
  };

  return (
    <section className={styles.instructions}>
      <h2 className={styles.instructionstitle}>Steps</h2>

      <ol className={styles.steps}>
        {steps.map((step, index) => {
          const completed = completedSteps.has(index);

          return (
            <li className={styles.step} key={index}>
              <button
                className={`${styles.stepnumber} ${
                  completed ? styles.completed : ""
                }`}
                onClick={() => toggleStep(index)}
                aria-label={`Mark step ${index + 1} as ${
                  completed ? "incomplete" : "complete"
                }`}
              >
                {index + 1}
              </button>

              <p
                className={`${styles.steptext} ${
                  completed ? styles.completedtext : ""
                }`}
              >
                {step.instruction}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
