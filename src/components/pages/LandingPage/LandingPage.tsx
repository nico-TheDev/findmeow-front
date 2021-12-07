import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik, FormikHelpers, FormikValues } from "formik";

import { Button } from "components/shared/shared";

import {
    MainContainer,
    Container,
    HeroLeft,
    HeroRight,
    Logo,
    HeroImg,
    LoginForm,
    InputField,
    BottomForm,
} from "./styles";

import logoImg from "assets/img/findmeow-logo-2.png";
import heroImg from "assets/img/landing-img-1.png";

interface IProps {}

export const LandingPage: React.FC<IProps> = () => {
    const navigate = useNavigate();
    const handleSubmit = (values: FormikValues) => {
        console.log(values);
        navigate("/dashboard/home");
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: handleSubmit,
    });

    return (
        <MainContainer>
            <Container>
                <HeroLeft>
                    <Logo src={logoImg} alt="Findmeow Logo" />
                    <LoginForm onSubmit={formik.handleSubmit}>
                        <h2>Login</h2>
                        <InputField>
                            <input
                                type="text"
                                placeholder="Username"
                                id="username"
                                name="username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            <span>Example:name@email.com</span>
                        </InputField>
                        <InputField>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
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
