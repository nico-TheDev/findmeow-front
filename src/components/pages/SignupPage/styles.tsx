// @ts-nocheck
import styled from "styled-components";
import { Button } from "components/shared/shared";
import respondTo from "util/respondTo";

export const MainContainer = styled.header`
    min-height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.primary.main};
    display: grid;
    place-items: center;

    ${respondTo.cp`
         min-height: 130vh;

        `}
`;

export const Container = styled.div`
    width: 90%;
    min-height: 90vh;
    background-color: white;
    border-radius: 2.5rem;
    box-shadow: 10px 13px 42px -2px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 10px 13px 42px -2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 10px 13px 42px -2px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    position: relative;

    ${respondTo.cp`
            width:90%;
            padding:4rem 2rem;
        `}
`;

export const HeroLeft = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 3rem;
`;

export const HeroRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 250px;
    display: block;
    margin-bottom: 5rem;
`;

export const HeroImg = styled.img`
    width: 350px;
`;

export const LoginForm = styled.form`
    width: 80%;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content 1fr;
    grid-template-areas:
        "title title"
        "left right";
    align-content: start;
    align-items: start;

    ${respondTo.md`
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3,max-content);
        grid-template-areas:
            "title"
            "left"
            "right";
        gap:0rem;
    `}

    ${respondTo.cp`
        width:100%;

        input{
            width:100% !important;
            margin:0 0 1rem 0;
        }

    `}

    h2 {
        color: ${({ theme }) => theme.primary.dark};
        font-weight: 400;
        text-align: center;
        font-size: 2.5rem;
        grid-area: title;

        ${respondTo.md`
            margin-bottom:2rem;
        `}
    }
`;

export const Btn = styled(Button)`
    width: 100%;
    font-size: 1.2rem;
    margin-top: 1rem;

    ${respondTo.sm`
       margin-top:2.5rem;

    `}
`;

export const BottomForm = styled.div`
    margin-top: 1.5rem;
    span {
        font-size: 0.8rem;
        font-weight: 300;
    }

    a {
        color: blue;
    }
`;

export const Left = styled.div`
    grid-area: left;
`;
export const Right = styled.div`
    grid-area: right;
`;

export const Upload = styled.label`
    margin: 1rem 0;
    display: block;
`;

export const BackBtn = styled.button`
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: ${({ theme }) => theme.primary.dark};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;

    &:hover {
        background: ${({ theme }) => theme.primary.main};
    }

    svg {
        fill: white;
        width: 2rem;
        height: 2rem;
    }
`;
