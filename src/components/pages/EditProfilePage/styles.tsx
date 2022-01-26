// @ts-nocheck
import styled from "styled-components";
import { Button } from "components/shared/shared";
import respondTo from "util/respondTo";

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

    ${respondTo.sm`
        grid-template-columns:1fr;
    `}

    ${respondTo.cp`
       width:90%;
       padding-top:70px;
    `}
`;
export const PetImg = styled.img`
    width: 80%;
    height: 80%;
    display: block;
`;

export const ProfileCard = styled.div`
    label {
        display: grid;
    }
    img {
        margin-bottom: 1rem;
        border-radius: 50%;
        width: 300px;
        height: 300px;

        ${respondTo.cp`
        height: 200px;
        width: 200px;
        margin-right:auto;
        margin-left:auto;
    `}
    }
`;

export const PetForm = styled.form`
    padding: 1rem;
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
    justify-self: start;
    width: 100%;

    ${respondTo.cp`
        padding:0;

        input{
            margin:0;
            width:100%;
        }
    `}
`;

export const PetButton = styled(Button)`
    width: 100%;
    font-size: 1rem;
`;
