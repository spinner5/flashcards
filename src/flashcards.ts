import type { Flashcard } from "./type";

export const flashcardData: Flashcard[] = [
  {
    id: 1,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.",
  },
  {
    id: 2,
    question: "What is the difference between let and var?",
    answer: "let is block-scoped, while var is function-scoped.",
  },
  {
    id: 3,
    question: "What does async/await do?",
    answer:
      "It allows writing asynchronous code that looks synchronous using Promises.",
  },
  {
    id: 4,
    question: "What is the difference between == and ===?",
    answer:
      "== compares values with type coercion, === compares both value and type.",
  },
  {
    id: 5,
    question: "What is a Promise?",
    answer:
      "A Promise represents a value that may be available now, later, or never.",
  },
];
