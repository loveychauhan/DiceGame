import styled from "styled-components";

export const Button = styled.button`
  display: block;
  color: white;
  border: 1px solid transparent;
  background-color: black;
  padding: 10px;
  cursor: pointer;
  min-width: 220px;
  border-radius: 5px;
  margin-left: auto;
  font-size: 16px;
  transition: 0.2s background ease-in-out;

  &:hover {
    color: #000000;
    border: 1px solid black;
    background-color: white;

    transition: 0.3s background ease-in-out;
  }
`;
export const OutlineButton = styled(Button)`
background-color:white;
color: black;
border: 1px solid black;
  &:hover {
    color:white;
    border: 1px solid transparent;
    background-color: black;
  }
`;
