import styled from "styled-components";

export const MainContainer = styled.header`
    min-height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.secondary.main};
    display: grid;
    place-items: center;
`;

export const Container = styled.div`
    width: 90%;
    min-height: 90vh;
    background-color: white;
    border-radius: 1rem;
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
    padding-left: 3rem;
`;

export const HeroRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 350px;
    display: block;
    margin-bottom: 5rem;
`;

export const HeroImg = styled.img`
    width: 400px;
`;

export const LoginForm = styled.form`
    width: 60%;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    h2 {
        color: ${({ theme }) => theme.primary.dark};
        font-weight: 400;
        text-align: center;
    }
`;

export const InputField = styled.div`
    input {
        display: block;
        border: 1px solid gray;
        padding: 1rem 0.5rem;
        width: 100%;
        border-radius: 8px;
        color: black;
    }

    span {
        font-size: 0.8rem;
        font-weight: 300;
        color: gray;
        margin: 0 0.5rem;
    }
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

export const Button = styled.button`
    background-color: ${({ theme }) => theme.primary.main};
    border-radius: 5rem;
    padding: 0.8em 2em;
    color: white;
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-right: 2rem;
    &:hover {
        background-color: ${({ theme }) => theme.primary.light};
    }
`;
