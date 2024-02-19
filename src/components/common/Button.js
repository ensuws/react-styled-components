import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  background-color: ${(props) => (props.primary ? "#9195F6" : "#F9F07A")};
  font-size: 20px;
  margin: 2px;
  border-radius: 10px;
  padding: 10px;
  padding-left: 2rem;
  padding-right: 2rem;

  &:hover {
    color: ${(props) => (props.primary ? "#9195F6" : "#F9F07A")};
    background-color: ${(props) => (props.primary ? "#fff" : "#000")};
  }
`;

export const SecondayButton = styled(Button)`
  color: #fff;
  background-color: #FB88B4;
  padding: 10px;
  padding-left: 5rem;
  padding-right: 5rem;
  margin-bottom: 3rem;

  &:hover{
    color: #FB88B4;
    background-color: #fff;
  }
`;

export const Para = styled.p`
  color: ${(props) => (props.large ? "green" : "blue")};
  background-color: ${(props) => (props.large ? "white" : "maroon")};
  font-size: 40px;
  border-radius: 10px;
  padding: 10px;

  &:hover {
    background-color: green;
    color: white;
  }
`;
