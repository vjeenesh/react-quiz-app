import { useEffect, useState } from "react";

export default function QuizTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      //   console.log("starting timer");
      onTimeout();
    }, timeout);

    return () => {
      //   console.log("clearing timer");
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      //   console.log("setting interval");
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      //   console.log("clearing interval");
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      max={timeout}
      value={remainingTime}
      id="question-time"
      className={mode}
    />
  );
}
