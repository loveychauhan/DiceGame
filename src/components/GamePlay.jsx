import { useEffect, useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDie from "./RollDie";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(
    Number(localStorage.getItem("score")) || 0
  );
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getNumber = () => {
    if (!selectedNumber) {
      setError("You have not selected any number.");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber("");
  };

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDie currentDice={currentDice} getNumber={getNumber} />
      <div className="btns">
        <OutlineButton onClick={() => setScore(0)}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btns {
    margin-top: 32px;
    display: grid;
    place-content: center;
    gap: 10px;
  }
`;
