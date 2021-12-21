import styled from "styled-components";
import { Button } from "components/shared/shared";

export const PetMain = styled.div`
    width: 80%;
    margin: 2rem auto;
    background: white;
    padding: 1.5rem;
    border-radius: 2rem;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    min-height: 70vh;
    z-index: 2;
`;

export const PetLeft = styled.div`
    padding: 2rem;
    width: 100%;
    img {
        width: 100%;
        height: 350px;
        object-fit: cover;
        display: block;
    }
`;

export const PetBottom = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 1rem;
    }
`;

export const PetRight = styled.div`
    display: grid;
    gap: 1.5rem;
    align-content: start;
    padding: 2rem;
    height: 100%;
    h4 {
        font-size: 3rem;
    }

    p {
        font-size: 1.2rem;
    }
`;

export const PetLocation = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.7);
`;

export const PetBtn = styled(Button)`
    width: max-content;
    font-size: 1.2rem;
`;
