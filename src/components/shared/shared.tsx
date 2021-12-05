import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.gray};
    min-height: 100vh;
    padding-top: 15vh;
    position: relative;
    h1 {
        width: 90%;
        margin: 0 auto;
        font-weight: 300;
        letter-spacing: 2px;
    }
`;
