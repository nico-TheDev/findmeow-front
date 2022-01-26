// @ts-nocheck
import styled from "styled-components";
import { Button } from "components/shared/shared";
import respondTo from "util/respondTo";

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

    ${respondTo.md`
        width:90%;
        grid-template-columns: 1fr;
        grid-template-rows:repeat(3,max-content);
        grid-template-areas:
        "head" 
        "left"
        "right";
    `}
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

        ${respondTo.sm`
            font-size:1.2rem;
        `}
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

        ${respondTo.md`
            height: 400px;        
        `}
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
    ${respondTo.md`
            text-align: center;        
        `}

    h4 {
        font-size: 2rem;
    }

    h5 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        ${respondTo.md`
            text-align:justify;
        `}
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

    ${respondTo.md`
            width: 100%;
            font-size:1rem;
            margin:0;        
        `}
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
    width: 100%;

    ${respondTo.md`
    justify-content: space-between;
       button{
           width:max-content;

       }
    `}

    ${respondTo.sm`
        flex-direction:column;    
        button:first-child{
            margin-bottom:2rem;
        }

        button{
            width:100%;
        }
    `}
`;
