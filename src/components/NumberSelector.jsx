import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNum.map((value, i) => (
          <Box
            onClick={() => numberSelectorHandler(value)}
            isSelected={value === selectedNumber}
            key={i}>
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .flex {
    display: grid;
    gap: 12px;
    place-content: center;
    grid-template-columns: repeat(6, 1fr);
    @media (max-width: 540px) {
      grid-template-columns: repeat(3, 2fr);
    }
  }
  p {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  .error {
    height: 28px;
    font-size: 14px;
    font-weight: 400;
    color: red;
  }
`;

const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})`
  width: 64px;
  height: 64px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
`;
