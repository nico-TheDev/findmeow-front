import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.gray};
    min-height: 100vh;
    padding: 13vh 0 2rem 0;
    h1 {
        width: 80%;
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

export const PageBG = styled.img`
    position: absolute;
    width: 300px;
    height: 60%;
    top: 50%;
    left: 0;
    transform: translateY(-40%);
`;
