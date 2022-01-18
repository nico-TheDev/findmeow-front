//@ts-nocheck

import styled from "styled-components";

export const PopupCard = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.5);
    border-radius: 1.5rem;
    min-width: 300px;
    text-align: center;
    z-index: 999;
    opacity: ${({ isShowing }) => (isShowing ? "1" : "0")};
    pointer-events: ${({ isShowing }) => (isShowing ? "none" : "all")};
`;

export const MessageHead = styled.h3`
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.75);
`;

export const MessageBody = styled.p`
    font-size: 1.5;
    color: gray;
`;

export const ButtonHolder = styled.div`
    margin-top: 3rem;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    text-transform: uppercase;
`;

export const YesBtn = styled.button`
    color: rgb(0, 128, 0);
    text-transform: inherit;

    &:hover {
        color: rgb(132, 245, 132);
    }
`;

export const NoBtn = styled.button`
    color: rgb(255, 0, 0);
    text-transform: inherit;

    &:hover {
        color: #ad2424;
    }
`;
