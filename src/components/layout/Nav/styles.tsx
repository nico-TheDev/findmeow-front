import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 10vh;
    background-color: white;
    box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    z-index: 10;
`;

export const Nav = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;

    span {
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
    }

    img {
        width: 40px;
        display: block;
        margin-right: 1rem;
    }

    &:hover {
        text-decoration: none;
    }
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 3rem;

    & .userPhoto {
        &:hover .options {
            opacity: 1;
            transform: scaleY(1);
        }
    }
`;

export const NavItem = styled.li`
    position: relative;
    a {
        font-size: 1.2rem;
        font-weight: 300;
        /* text-transform: uppercase; */

        &:hover {
            text-decoration: none;
            color: ${({ theme }) => theme.primary.main};
        }
    }
`;

export const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`;

export const AccountOptions = styled.div`
    position: absolute;
    top: 100%;
    right: -50%;
    background: white;
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
    button {
        padding: 1rem;
        width: 100%;

        &:hover {
            background-color: ${({ theme }) => theme.primary.main};
            color: white;
        }
    }
`;