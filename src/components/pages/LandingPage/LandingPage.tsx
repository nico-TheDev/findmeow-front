//@ts-nocheck
import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFormik, FormikHelpers, FormikValues } from "formik";

import { Button, InputField } from "components/shared/shared";
import { useAuth } from "contexts/AuthContext";
import { Actions } from "types/ActionTypes";

import {
    MainContainer,
    Container,
    HeroLeft,
    HeroRight,
    Logo,
    HeroImg,
    LoginForm,
    BottomForm,
    ErrorMessages,
} from "./styles";
import api from "api";
import logoImg from "assets/img/findmeow-logo-2.png";
import heroImg from "assets/img/landing-img-1.png";
import validateEmail from "util/validateEmail";

interface IProps {}

export const LandingPage: React.FC<IProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        authState: { token },
        authDispatch,
    } = useAuth();

    const LoginValidator = (values: FormikValues) => {
        let errors: { email: string; password: string } = {
            email: "",
            password: "",
        };

        if (!validateEmail(values.email)) {
            errors.email = "Invalid email";
        }

        if (values.email.length === 0) {
            errors.email = "This field is required";
        }
        if (values.password.length === 0) {
            errors.password = "This field is required";
        }

        if (values.password.length < 6) {
            errors.password = "Minimum password length is 6 characters";
        }

        return errors;
    };

    const handleSubmit = async (values: FormikValues) => {
        if (values.email === "" || values.password === "") return;
        try {
            const response = await api.post("/login", {
                data: { email: values.email, password: values.password },
            });
            const data = response.data;
            authDispatch({
                type: Actions.SET_TOKEN,
                payload: {
                    token: data.token,
                    userID: data.userID,
                },
            });
            authDispatch({
                type: Actions.SET_USER,
                payload: {
                    user: data.user,
                },
            });
            navigate("/dashboard/home");
            console.log(data);
        } catch (err) {
            alert(err);
            console.log(err);
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: handleSubmit,
        validate: LoginValidator,
    });

    useEffect(() => {
        if (token) navigate("/dashboard/home");
    }, [location.pathname]);

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
                                placeholder="Email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <ErrorMessages hasError={formik.errors.email}>
                                {formik.errors.email
                                    ? formik.errors.email
                                    : "Example:name@email.com"}
                            </ErrorMessages>
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
                            <ErrorMessages hasError={formik.errors.password}>
                                {formik.errors.password
                                    ? formik.errors.password
                                    : "Must not be less than 6 characters"}
                            </ErrorMessages>
                        </InputField>
                        <BottomForm>
                            <Button type="submit">Login</Button>
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
