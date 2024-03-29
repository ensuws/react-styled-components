import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Rotate = styled.div`
    animation: ${rotate} 2s linear infinite;
    font-size: 30px;
    margin: 80px;
`;