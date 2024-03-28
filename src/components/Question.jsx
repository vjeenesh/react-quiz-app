import QuizTimer from "./QuizTimer";
import Answers from "./Answers";
import { useState } from "react";

import QUESTIONS from "../assets/questions";

export default function Question({
  questionIndex,
  onAnswerSelect,
  handleTimeout,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(option) {
    setAnswer({
      selectedAnswer: option,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: option,
        isCorrect: QUESTIONS[questionIndex].answers[0] === option,
      });

      setTimeout(() => {
        onAnswerSelect(option);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuizTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? handleTimeout : () => {}}
        mode={answerState}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
        answers={QUESTIONS[questionIndex].answers}
        onAnswerSelect={handleSelectAnswer}
      />
    </div>
  );
}
