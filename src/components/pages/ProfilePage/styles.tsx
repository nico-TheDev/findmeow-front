// @ts-nocheck
import styled from "styled-components";
import { Button } from "components/shared/shared";
import respondTo from "util/respondTo";

export const ProfileMain = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: 2rem;

    ${respondTo.md`
        flex-direction:column;
    `}
`;

export const ProfileCard = styled.div`
    position: relative;
    margin-top: 2rem;
    background: white;
    padding: 1.5rem;
    padding-top: 3rem;
    border-radius: 1rem;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    display: grid;
    align-content: center;

    ${respondTo.md`
        justify-content:center;
        padding-top:5rem;
    `}

    img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        display: block;
        margin-bottom: 1.5rem;
        border: 1px solid black;
    }

    h3 {
        font-size: 2rem;
    }

    h4 {
        font-size: 1.25rem;
        color: rgba(0, 0, 0, 0.5);
    }

    &:hover :first-child {
        opacity: 1;
        pointer-events: all;
    }
`;

export const ProfilePosts = styled.div`
    padding: 2rem;
    flex: 1;

    ${respondTo.lg`
        width:100%;    

    `}

    ${respondTo.md`
        margin-top:3rem;
        padding:0;
        h2{
            margin-bottom:2rem;
        }
    `}
    h2 {
        font-size: 2rem;
        font-weight: 300;
    }
`;

export const PostList = styled.div`
    height: 60vh;
    width: 100%;
    margin-top: 1rem;
    padding: 1rem;
`;

export const EditBtn = styled(Button)`
    position: absolute;
    top: 1rem;
    left: 1rem;
    margin: 0;
`;

export const DeleteBtn = styled(Button)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    margin: 0;
    background: #d50000;
    border: 2px solid transparent;
    opacity: 0;
    pointer-events: none;
    &:hover {
        background: #ef5350;
        color: black;
    }
`;
