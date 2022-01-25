import styled from "styled-components";
import { Button } from "components/shared/shared";

export const PetMain = styled.div`
    width: 80%;
    margin: 2rem auto;
    background: white;
    padding: 3rem;
    border-radius: 2rem;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content max-content;
    grid-template-areas:
        "head head"
        "left right";
    align-items: center;
    align-content: center;
    justify-items: center;
    gap: 2rem;
    min-height: 70vh;
    z-index: 2;
    position: relative;
`;

export const PetHead = styled.div`
    grid-area: head;
    position: relative;
    width: 100%;
    h2 {
        text-transform: uppercase;
        text-align: center;
        font-size: 2.5rem;
        flex: 1;
    }

    button {
        top: 0;
        left: 0;
        right: inherit;
        bottom: inherit;
        height: 100%;
    }
`;

export const PetLeft = styled.div`
    /* padding: 2rem; */
    width: 100%;
    grid-area: left;
    img {
        width: 100%;
        height: 340px;
        object-fit: cover;
        display: block;
    }
`;

export const PetBottom = styled.div`
    grid-area: right;
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
    gap: 1rem;
    align-content: space-between;
    /* padding: 2rem; */
    height: 100%;
    h4 {
        font-size: 2rem;
    }

    h5 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
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

export const PetDescription = styled.p`
    max-height: 140px;
    overflow-y: scroll;
`;

export const PetBtnHolder = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
`;
