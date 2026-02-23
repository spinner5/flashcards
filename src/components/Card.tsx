import { useState } from "react";
import type { Flashcard } from "../type";
import styles from "./Card.module.css";

interface CardProps {
  index: number;
  flashcards: Flashcard[];
  onPrevClick: () => void;
  onNextClick: () => void;
}

const Card = ({ index, flashcards, onPrevClick, onNextClick }: CardProps) => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(true);

  return (
    <div className={styles.card}>
      {!isShowingAnswer && (
        <p className={styles.answer}>{flashcards[index].answer}</p>
      )}

      {isShowingAnswer && (
        <p className={styles.question}>{flashcards[index].question}</p>
      )}

      <div className={styles.buttonContainer}>
        <button onClick={onPrevClick} className={styles.prevBtn}>
          Previous
        </button>

        {isShowingAnswer && (
          <button
            onClick={() => setIsShowingAnswer(!isShowingAnswer)}
            className={styles.showBtn}
          >
            Show answer
          </button>
        )}

        <button onClick={onNextClick} className={styles.nextBtn}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;
