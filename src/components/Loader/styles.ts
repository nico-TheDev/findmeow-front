import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0%{transform:rotate(0deg)}
    50%{transform:rotate(180deg)}
    100%{transform:rotate(360deg)}
`;

export const LoaderMain = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 10000000000000;
    background: rgba(0, 0, 0, 0.75);
    display: grid;
    place-items: center;
`;

export const LoaderImg = styled.img`
    width: 100px;
    height: 100px;
    display: block;
    animation: ${spin} 1s linear infinite;
    pointer-events: none;
`;
