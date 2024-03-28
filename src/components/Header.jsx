import quizLogo from "../assets/quiz-logo.png";

export default function Header({ children }) {
  return (
    <header>
      <img src={quizLogo} alt="Quiz Logo" />
      <h1>{children}</h1>
    </header>
  );
}
