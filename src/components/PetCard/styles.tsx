//@ts-nocheck

import styled from "styled-components";

export const CardMain = styled.div``;

export const CardHead = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

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
