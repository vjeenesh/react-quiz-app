import quizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../assets/questions";

export default function Summary({ selectedAnswers }) {
  const skippedAnswers = selectedAnswers.filter((answer) => answer === null);
  const correctAnswers = selectedAnswers.filter(
    (answer, index) => QUESTIONS[index].answers[0] === answer
  );

  const skippedPercentage = Math.round(
    (skippedAnswers.length / selectedAnswers.length) * 100
  );
  const correctPercentage = Math.round(
    (correctAnswers.length / selectedAnswers.length) * 100
  );
  const wrongPercentage = 100 - (skippedPercentage + correctPercentage);

  return (
    <div id="summary">
      <img src={quizCompleteImage} alt="Quiz Complete" />
      <h2>Quiz Complete!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">Wrong</span>
        </p>
      </div>
      <ol>
        {selectedAnswers.map((answer, index) => {
          let cssClass = "";

          if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else if (answer !== null) {
            cssClass += " wrong";
          } else {
            cssClass += " skipped";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={"user-answer" + cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
