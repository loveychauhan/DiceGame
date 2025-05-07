import { useState } from "react";
import styled from "styled-components";

const RollDie = ({ currentDice, getNumber }) => {
  return (
    <DiceContainer onClick={getNumber}>
      <div className="dice">
        <img src={`/images/dice_${currentDice}.svg`} alt="" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RollDie;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  max-width: 250px;
  margin-inline: auto;
  .dice {
    cursor: pointer;
  }
`;
