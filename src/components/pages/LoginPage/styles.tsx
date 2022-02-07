//@ts-nocheck

import styled from "styled-components";
import respondTo from "util/respondTo";

export const MainContainer = styled.header`
    min-height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.primary.main};
    display: grid;
    place-items: center;
`;

export const Container = styled.div`
    position: relative;
    width: 90%;
    min-height: 90vh;
    background-color: white;
    border-radius: 2.5rem;
    box-shadow: 10px 13px 42px -2px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 10px 13px 42px -2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 10px 13px 42px -2px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 2rem;
    gap: 2rem;
`;

export const HeroLeft = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeroRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

    ${respondTo.md`
        display:none;    

    `}
`;

export const Logo = styled.img`
    width: 250px;
    display: block;
    margin-bottom: 5rem;

    ${respondTo.sm`
        width:200px;
        margin-bottom:2.5rem;
    `}
`;

export const HeroImg = styled.img`
    width: 350px;
`;

export const LoginForm = styled.form`
    width: 60%;
    margin: 0 auto;
    display: grid;
    gap: 1.5rem;
    ${respondTo.sm`
        width:90%;
        gap:1.2rem;
    `}

    h2 {
        color: ${({ theme }) => theme.primary.dark};
        font-weight: 400;
        text-align: center;
    }
`;

export const BottomForm = styled.div`
    margin-top: 1.5rem;
    ${respondTo.md`
        display:flex;    
        flex-direction:column;
        margin:0;

        button {
            width:100%;
            margin-bottom:1rem;
        }

        span{
            text-align:center;
        }

    `}
    span {
        font-size: 0.8rem;
        font-weight: 300;
    }

    a {
        color: blue;
    }
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
