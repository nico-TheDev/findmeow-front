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
    position: relative;
`;
export const PetImg = styled.img`
    width: 80%;
    height: 80%;
    display: block;
`;

export const PetForm = styled.form`
    padding: 1rem;
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
    justify-self: start;
    width: 100%;
`;

export const PetButton = styled(Button)`
    width: 100%;
    font-size: 1rem;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    label input {
        margin-right: 10px;
        font-family: inherit;
    }
`;

export const UploadBtn = styled.label``;
