// @ts-nocheck
import styled from "styled-components";
import { Link } from "react-router-dom";
import respondTo from "util/respondTo";

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

    ${respondTo.lg`
        display:none;`}
`;

export const NavItem = styled.li`
    position: relative;
    a {
        font-size: 1.2rem;
        font-weight: 300;
        color: ${({ isCurrent, theme }) =>
            isCurrent ? theme.primary.main : "inherit"};

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

export const AccountOptions = styled.div<{ token: string | null | undefined }>`
    display: ${({ token }) => (token ? "block" : "none")};
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

export const MobileNavBtn = styled.button`
    display: none;
    align-items: center;
    svg {
        width: 2rem;
        height: 2rem;
        fill: currentColor;
    }
    ${respondTo.lg`
        display:flex;

        `}
`;

export const MobileMenu = styled.ul`
    position: absolute;
    width: 100%;
    top: 10vh;
    left: 0;
    background: white;
    display: grid;
    font-size: 1.5rem;
    transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(10000%)"};
    transition: 1s;
`;

export const MobileItem = styled(NavItem)`
    button {
        font-size: 1.2rem;
        font-weight: inherit;
        font-family: inherit;
    }

    a,
    button {
        width: 100%;
        display: block;
        height: 100%;
        padding: 0.5rem;
        text-align: left;
        &:hover {
            background: ${({ theme }) => theme.primary.main};
            color: white;
        }
    }
`;
