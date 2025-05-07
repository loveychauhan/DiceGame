import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>YOUR SCORE</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
    @media (max-width: 764px) {
      font-size: 64px;
    }
  }
  p {
    font-size: 24px;
    @media (max-width: 764px) {
      font-size: 18px;
    }
  }
`;
