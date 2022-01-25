import styled from "styled-components";
import { Button } from "components/shared/shared";

export const ProfileMain = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
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
    right: 1rem;
    margin: 0;
`;
