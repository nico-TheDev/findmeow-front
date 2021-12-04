import React from "react";
import { Link } from "react-router-dom";

import {
    MainContainer,
    Container,
    HeroLeft,
    HeroRight,
    Logo,
    HeroImg,
    LoginForm,
    InputField,
    Button,
    BottomForm,
} from "./styles";

import logoImg from "assets/img/findmeow-logo-2.png";
import heroImg from "assets/img/landing-img-1.png";

interface IProps {}

export const LandingPage: React.FC<IProps> = () => {
    return (
        <MainContainer>
            <Container>
                <HeroLeft>
                    <Logo src={logoImg} alt="Findmeow Logo" />
                    <LoginForm>
                        <h2>Login</h2>
                        <InputField>
                            <input type="text" placeholder="Username" />
                            <span>Example:name@email.com</span>
                        </InputField>
                        <InputField>
                            <input type="password" placeholder="Password" />
                            <span>Must not be less than 6 characters</span>
                        </InputField>
                        <BottomForm>
                            <Button>Login</Button>
                            <span>
                                No account yet ?{" "}
                                <Link to="/signup">Sign up here</Link>
                            </span>
                        </BottomForm>
                    </LoginForm>
                </HeroLeft>
                <HeroRight>
                    <HeroImg
                        src={heroImg}
                        alt="Four cats in a lime green window"
                    />
                </HeroRight>
            </Container>
        </MainContainer>
    );
};

export default LandingPage;
