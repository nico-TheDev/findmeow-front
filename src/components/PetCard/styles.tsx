//@ts-nocheck

import styled, { keyframes } from "styled-components";

const blink = keyframes`
    0%{background:rgba(0,0,0.0.5)}
    100%{background:rgba(0,0,0.75)}
`;

export const CardMain = styled.div``;

export const CardHead = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    align-items: center;

    div {
        flex: 1;

        span {
            font-size: 0.8rem;
            color: gray;
            margin-top: 5px;
            display: inline-block;
        }
    }

    span {
        font-size: 0.9rem;
    }
`;

export const CardImg = styled.div`
    margin: -3px;
    img {
        height: 200px;
        width: 100%;
        object-fit: cover;
    }
`;

export const CardDesc = styled.div`
    padding: 1rem;
`;

export const CardType = styled.h3`
    text-align: center;
    padding: 1rem 0;
    background: ${({ type, theme }) =>
        type === "adoption" ? theme.primary.light : theme.primary.green};
    color: white;
    width: 100%;
`;

export const CardLoader = styled.div`
    width: 250px;
    height: 320px;
    border-radius: 1rem;
    animation: ${blink} 1s linear infinite;
    margin: 1rem;
`;
