import styled from "styled-components";

export const PetContainer = styled.div`
    height: 70vh;
    width: 70%;
    margin: 1.5rem auto 0 auto;
    overflow-y: scroll;
    position: relative;

    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 100px;
`;

export const EmptyBody = styled.div`
    display: grid;
    place-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    gap: 2rem;

    h2 {
        font-size: 2rem;
    }
`;
export const EmptyImg = styled.img`
    width: 300px;
    display: block;
`;
