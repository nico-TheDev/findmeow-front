//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";

import { Actions } from "types/ActionTypes";
import {
    NavContainer,
    Nav as NavMain,
    NavLogo,
    NavList,
    NavItem,
    MobileNavBtn,
    MobileMenu,
    MobileItem,
    AccountOptions,
} from "./styles";
import { useAuth } from "contexts/AuthContext";
import navLogo from "assets/img/findmeow-logo.png";
import useGetUser from "hooks/useGetUser";
import Icon from "components/shared/Icon";
import { useNav } from "contexts/NavContext";

interface IProps {}

const Nav: React.FC<IProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(location.pathname);
    const { authState, authDispatch } = useAuth();
    const { userID, token } = authState;
    const { user: currentUser, isLoading: isUserLoaded } = useGetUser(userID);
    const { isNavOpen, setIsNavOpen } = useNav();

    const handleLogout = () => {
        authDispatch({ type: Actions.LOGOUT_USER });
        navigate("/");
    };

    const handleProfile = () => {
        navigate("/dashboard/profile");
    };

    const handleNavOpen = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        setCurrentLocation(location.pathname);
    }, [location.pathname]);

    if (isUserLoaded) return <div></div>;

    return (
        <NavContainer>
            <NavMain>
                <NavLogo to="/dashboard/home">
                    <img src={navLogo} alt="" />
                    <span>FindMEow</span>
                </NavLogo>

                <NavList>
                    <NavItem isCurrent={currentLocation.includes("home")}>
                        <Link to="/dashboard/home">Home</Link>
                    </NavItem>
                    <NavItem isCurrent={currentLocation.includes("find")}>
                        <Link to="/dashboard/find">Find a Pet</Link>
                    </NavItem>
                    <NavItem isCurrent={currentLocation.includes("adopt")}>
                        <Link to="/dashboard/adopt">Adopt a Pet</Link>
                    </NavItem>
                    <NavItem className="userPhoto">
                        <Image
                            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                            publicId={currentUser?.profileImg}
                            radius="max"
                            width="40"
                            height="40"
                        />
                        <AccountOptions className="options" token={token}>
                            <button onClick={handleProfile}>Profile</button>
                            <button onClick={handleLogout}>Logout</button>
                        </AccountOptions>
                    </NavItem>
                </NavList>

                <MobileNavBtn onClick={handleNavOpen}>
                    <Icon name={isNavOpen ? "close" : "menu"} />
                </MobileNavBtn>

                {/* MOBILE MENU */}
                <MobileMenu isOpen={isNavOpen}>
                    <MobileItem isCurrent={currentLocation.includes("home")}>
                        <Link to="/dashboard/home">Home</Link>
                    </MobileItem>
                    <MobileItem isCurrent={currentLocation.includes("find")}>
                        <Link to="/dashboard/find">Find a Pet</Link>
                    </MobileItem>
                    <MobileItem isCurrent={currentLocation.includes("adopt")}>
                        <Link to="/dashboard/adopt">Adopt a Pet</Link>
                    </MobileItem>
                    <MobileItem>
                        <button onClick={handleProfile}>Profile</button>
                    </MobileItem>
                    <MobileItem>
                        <button onClick={handleLogout}>Logout</button>
                    </MobileItem>
                </MobileMenu>
            </NavMain>
        </NavContainer>
    );
};

export default Nav;
