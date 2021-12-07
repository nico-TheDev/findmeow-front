import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.gray};
    min-height: 100vh;
    padding: 2rem;
    padding-top: 15vh;
    position: relative;
    h1 {
        width: 90%;
        margin: 0 auto;
        font-weight: 300;
        letter-spacing: 2px;
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
