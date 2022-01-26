// @ts-nocheck
import styled from "styled-components";
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
    margin-top: 2rem;
    background: white;
    padding: 1.5rem;
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
