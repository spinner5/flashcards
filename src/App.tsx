import Card from "./components/Card";
import "./app.css";
import ProgressBar from "./components/ProgressBar";
import { flashcardData } from "./flashcards";
import { useState } from "react";
import type { Flashcard } from "./type";

function App() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(flashcardData);
  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    if (index === flashcards.length - 1) return;
    setIndex(index + 1);
  };

  const handlePrevClick = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  return (
    <div className="container">
      <h1>Flashcards</h1>
      <ProgressBar flashcards={flashcards} index={index} />
      <Card
        key={index}
        index={index}
        flashcards={flashcards}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
    </div>
  );
}

export default App;
