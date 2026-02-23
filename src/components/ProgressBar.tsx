import type { Flashcard } from "../type";
import styles from "./Progressbar.module.css";

interface ProgressBarProps {
  index: number;
  flashcards: Flashcard[];
}

const ProgressBar = ({ index, flashcards }: ProgressBarProps) => {
  const correctPercentage = ((index + 1) / flashcards.length) * 100;

  return (
    <div className={styles.barContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${correctPercentage}%` }}
      ></div>
      <div className={styles.progressPercent}>{correctPercentage} %</div>
      <div className={styles.progressText}>
        {index + 1} out of {flashcards.length}
      </div>
    </div>
  );
};

export default ProgressBar;
