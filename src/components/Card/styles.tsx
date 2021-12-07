import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "components/shared/shared";

export const CardBody = styled.div`
    background-color: white;
    padding: 3.5rem 1.5rem;
    border-radius: 2rem;
    max-width: 340px;
    display: grid;
    justify-items: center;
    align-content: center;
    gap: 1rem;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.31);
`;

export const CardImg = styled.img`
    width: 150px;
    height: 170px;
`;

export const CardTitle = styled.h3`
    font-weight: 400;
`;

export const CardDesc = styled.p`
    font-size: 0.9rem;
    font-weight: 400;
    text-align: center;
`;

export const CardLink = styled(Link)`
    color: ${({ theme }) => theme.primary.main};
`;

export const CardButton = styled(Button)`
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 1em 1.6em;
    margin: 0;
    svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: white;
        margin-right: 0.5rem;
    }
`;
