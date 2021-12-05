import React from "react";
import { Link } from "react-router-dom";
import {
    NavContainer,
    Nav as NavMain,
    NavLogo,
    NavList,
    NavItem,
    UserImg,
} from "./styles";
import navLogo from "assets/img/findmeow-logo.png";

interface IProps {}

const Nav: React.FC<IProps> = () => {
    return (
        <NavContainer>
            <NavMain>
                <NavLogo to="/dashboard/home">
                    <img src={navLogo} alt="" />
                    <span>FindMEow</span>
                </NavLogo>

                <NavList>
                    <NavItem>
                        <Link to="/dashboard/home">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/dashboard/find">Find a Pet</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/dashboard/adopt">Adopt a Pet</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/dashboard/profile">
                            <UserImg
                                src="https://randomuser.me/api/portraits/men/89.jpg"
                                alt=""
                            />
                        </Link>
                    </NavItem>
                </NavList>
            </NavMain>
        </NavContainer>
    );
};

export default Nav;
