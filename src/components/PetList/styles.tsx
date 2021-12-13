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
