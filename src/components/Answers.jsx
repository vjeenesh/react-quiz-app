import { useRef } from "react";

export default function Answers({
  answers,
  answerState,
  selectedAnswer,
  onAnswerSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((option) => {
        const isSelected = selectedAnswer === option;

        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={option} className="answer">
            <button
              onClick={() => onAnswerSelect(option)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
