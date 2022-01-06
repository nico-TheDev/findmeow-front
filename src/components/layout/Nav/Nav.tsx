import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Actions } from "types/ActionTypes";
import {
    NavContainer,
    Nav as NavMain,
    NavLogo,
    NavList,
    NavItem,
    UserImg,
    AccountOptions,
} from "./styles";
import { useAuth } from "contexts/AuthContext";
import navLogo from "assets/img/findmeow-logo.png";
import avatarPlaceholder from "assets/img/avatar-icon.png";

interface IProps {}

const Nav: React.FC<IProps> = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useAuth();
    const { user, token } = authState;

    const imgPath = user?.profileImg;
    const avatarSrc = `${process.env.REACT_APP_IMG_PATH}${imgPath}`;
    console.log(avatarSrc);

    const handleLogout = () => {
        authDispatch({ type: Actions.LOGOUT_USER });
        navigate("/");
    };

    const handleProfile = () => {
        navigate("/dashboard/profile");
    };

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
                    <NavItem className="userPhoto">
                        <Link to="/dashboard/profile">
                            <UserImg
                                src={token ? avatarSrc : avatarPlaceholder}
                                alt=""
                            />
                        </Link>
                        <AccountOptions className="options" token={token}>
                            <button onClick={handleProfile}>Profile</button>
                            <button onClick={handleLogout}>Logout</button>
                        </AccountOptions>
                    </NavItem>
                </NavList>
            </NavMain>
        </NavContainer>
    );
};

export default Nav;
