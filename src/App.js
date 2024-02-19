import styled from "styled-components";
import { Button, SecondayButton, Para } from "./components/common/Button";
import { Rotate } from './components/common/Animate'
import Calculator  from "./components/common/Calculator";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

const Title = styled.h1`
  color: #fff;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Title>Tugas 10 Module 11 - Styled Component</Title>
        <Button primary>💙 Wahyu Saputra 💙</Button>
        <Button>💛 JayJay 💛</Button>
        <SecondayButton>💗 Calculator App 💗</SecondayButton>
  
          <Calculator/>
        
        <Rotate>💢🕕💢</Rotate>
        <Para large>Support by : JayJay</Para>
      </Wrapper>
    </>
  );
}

export default App;
