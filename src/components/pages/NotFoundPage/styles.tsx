import styled from "styled-components";

export const NotFoundMain = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    justify-items: center;
    align-content: center;
    align-items: center;
    text-align: center;
    padding-top: 2rem;
`;

export const NotFoundPhoto = styled.img`
    display: block;
    width: 400px;
    height: auto;
    object-fit: cover;
`;

export const NotFoundTitle = styled.h3`
    font-size: 3rem;
`;

export const NotFoundDesc = styled.p`
    font-size: 2rem;
    font-weight: 300;
    span {
        display: block;
    }
`;
