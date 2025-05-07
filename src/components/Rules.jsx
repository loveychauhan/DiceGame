import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Dice Game.</h2>
      <p>Select any number</p>
      <p>Click on dice Image</p>
      <p>
        After clicking on dice if your number is equal to dice number you will
        get the same point as dice.
      </p>
      <p>And if you get wrong guess your 2 points will be deducted.</p>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 784px;
  background-color: #fbf1f1;
  padding: 16px;
  margin-block: 48px;
  margin-inline: auto;
  border-radius: 10px;

  h2 {
    margin-bottom: 16px;
  }
`;
