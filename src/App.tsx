import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  function handlePlusOneClick() {
    setScore(score + 1);
  }

  function handlePlusThreeClick() {
    setScore(score + 1);
    setScore(score + 1);
    setScore(score + 1);
  }

  return (
    <>
      <h1>Score: {score}</h1>
      <button onClick={handlePlusOneClick}>+1</button>
      <button onClick={handlePlusThreeClick}>+3</button>
    </>
  );
}

export default App;
