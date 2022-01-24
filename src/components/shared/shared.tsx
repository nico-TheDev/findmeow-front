//@ts-nocheck

import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.gray};
    min-height: 100vh;
    padding: 13vh 0 2rem 0;
    position: relative;
    display: grid;
    place-items: center;
    h1 {
        width: 80%;
        margin: 0 auto;
        font-weight: 300;
        letter-spacing: 2px;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme, outlined }) =>
        outlined ? "white" : theme.primary.main};
    border-radius: 5rem;
    padding: 0.8em 2em;
    color: ${({ theme, outlined }) =>
        outlined ? theme.primary.main : "white"};
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-right: 2rem;
    border: 2px solid ${({ theme }) => theme.primary.main};
    &:hover {
        background-color: ${({ theme, outlined }) =>
            outlined ? theme.primary.main : "white"};
        color: ${({ theme, outlined }) =>
            outlined ? "white" : theme.primary.main};
    }

    svg {
        fill: currentColor;
        transition: 1ms;
    }
`;

export const PageBG = styled.img`
    position: absolute;
    width: 300px;
    height: 60%;
    top: 50%;
    left: 0;
    transform: translateY(-40%);
`;

export const InputField = styled.div`
    input,
    textarea {
        display: block;
        border: 1px solid gray;
        font-size: 1rem;
        padding: 1em 0.75em;
        width: 100%;
        border-radius: 8px;
        color: black;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.4);
        font-family: inherit;

        &:hover {
            border: 1px solid ${({ theme }) => theme.primary.main};
        }
    }

    textarea {
        resize: none;
        height: 70px;
    }

    span {
        font-size: 0.8rem;
        font-weight: 300;
        color: gray;
        margin: 0 0.5rem;
    }
`;

export const ErrorMessages = styled.span`
    color: ${({ hasError }) => (hasError ? "red" : "green")} !important;
    font-weight: ${({ hasError }) => (hasError ? "bold" : "normal")} !important;
`;

export const CreateBtn = styled(Button)`
    position: absolute;
    bottom: 10%;
    right: 20px;
    z-index: 200;
    display: flex;
    align-items: center;

    span {
        font-weight: bold;
        font-size: 1rem;
        margin-left: 10px;
        line-height: 1;
    }

    svg {
        width: 2rem;
        height: 2rem;
    }
`;

export const BackBtn = styled(CreateBtn)`
    bottom: inherit;
    right: inherit;
    top: 5%;
    left: 3%;

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const UploadBtn = styled.label`
    display: flex;
    align-items: center;

    input {
        margin-left: 2rem;
    }
`;

export const PreviewImg = styled.img`
    width: 50px;
    height: 50px;
    display: block;
    object-fit: cover;
`;
