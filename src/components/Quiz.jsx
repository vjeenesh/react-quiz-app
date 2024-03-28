import { useCallback, useState } from "react";

import QUESTIONS from "../assets/questions";

import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const currentQuestionIndex = selectedAnswers.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setSelectedAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  }, []);

  const handleTimeout = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (currentQuestionIndex === QUESTIONS.length) {
    return <Summary selectedAnswers={selectedAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        questionIndex={currentQuestionIndex}
        onAnswerSelect={handleSelectAnswer}
        handleTimeout={handleTimeout}
      />
    </div>
  );
}
