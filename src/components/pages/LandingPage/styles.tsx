import styled from "styled-components";

export const MainContainer = styled.header`
    min-height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.primary.main};
    display: grid;
    place-items: center;
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
    width: 250px;
    display: block;
    margin-bottom: 5rem;
`;

export const HeroImg = styled.img`
    width: 350px;
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
