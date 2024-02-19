import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 400px;
  min-height: 500px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  box-shadow: 2px 2px 10px #000;
  border-radius: 15px;
  background-color: #265073;
`;

export const Screen = styled.div`
  grid-column: 1/-1;
  background-color: #265073;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-radius: 15px;
`;

export const Prevoius = styled.div`
  color: #fff;
  font-size: 2.5rem;
`;

export const Current = styled.div`
  color: #fff;
  font-size: 4rem;
`;

export const Button = styled.button`
    cursor: pointer;
    font-size: 2.5rem;
    line-height: 6rem;
    outline: none;
    border: 1px outset white;
    background-color: #F1FADA;
    border-radius: 15px;
    &:hover{
        background-color: #2D9596;
    }
    ${function ({ gridSpan }) {
        if (gridSpan) {
            return `grid-column: span ${gridSpan}`;
        }
    }}
    ${({ operation }) => operation && "background-color:#9AD0C2;"};
    ${({ control }) => control && "background-color:skyBlue;"};
    ${({ equals }) => equals && "background-color:#9AD0C2;"};
    ${({ decimal }) => decimal && "background-color:skyBlue;"};
`;

