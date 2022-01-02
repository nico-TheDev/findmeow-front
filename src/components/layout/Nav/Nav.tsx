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

interface IProps {}

const Nav: React.FC<IProps> = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useAuth();
    const { user, token } = authState;

    const handleLogout = () => {
        authDispatch({ type: Actions.LOGOUT_USER });
        navigate("/");
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
                                src="https://randomuser.me/api/portraits/men/89.jpg"
                                alt=""
                            />
                        </Link>
                        <AccountOptions className="options">
                            <button
                                onClick={() => navigate("/dashboard/profile")}
                            >
                                Profile
                            </button>
                            <button onClick={handleLogout}>Logout</button>
                        </AccountOptions>
                    </NavItem>
                </NavList>
            </NavMain>
        </NavContainer>
    );
};

export default Nav;
