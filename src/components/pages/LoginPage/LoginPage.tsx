//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFormik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";

import { Button, InputField, ErrorMessages } from "components/shared/shared";
import { useAuth } from "contexts/AuthContext";
import { Actions } from "types/ActionTypes";
import Popup from "components/Popup";

import {
    MainContainer,
    Container,
    HeroLeft,
    HeroRight,
    Logo,
    HeroImg,
    LoginForm,
    BottomForm,
} from "./styles";
import api from "api";
import logoImg from "assets/img/findmeow-logo-2.png";
import heroImg from "assets/img/landing-img-1.png";
import Loader from "components/Loader";
import Icon from "components/shared/Icon";

interface IProps {}

export const LoginPage: React.FC<IProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        authState: { token },
        authDispatch,
    } = useAuth();
    const [popupState, setPopupState] = useState({
        isShowing: false,
        message: "",
    });

    const [showLoader, setShowLoader] = useState(false);
    const [isShowingPassword, setIsShowingPassword] = useState(false);

    const LoginSchema = yup.object({
        email: yup.string().required("Email is required").email(),
        password: yup.string().required("Password is required"),
    });

    const handleSubmit = async (values: FormikValues) => {
        try {
            setShowLoader(true);
            const response = await api.post("/login", {
                data: { email: values.email, password: values.password },
            });

            const data = response.data;

            setShowLoader(false);

            setPopupState({
                isShowing: true,
                message: "Successfully Logged In",
            });

            setTimeout(() => {
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
                setPopupState({ isShowing: false, message: "" });
                navigate("/dashboard/home");
            }, 3000);
        } catch (err) {
            if (err.response) {
                setShowLoader(false);
                setPopupState({
                    isShowing: true,
                    message: err.response.data.message,
                });
            } else {
                setShowLoader(false);
                setPopupState({
                    isShowing: true,
                    message: "Something went wrong. Please try again.",
                });
            }
            console.log(err.response);
            setTimeout(() => {
                setPopupState({ isShowing: false, message: "" });
            }, 3000);
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: handleSubmit,
        validationSchema: LoginSchema,
    });

    useEffect(() => {
        if (token) navigate("/dashboard/home");
    }, [location.pathname]);

    return (
        <MainContainer>
            {showLoader && <Loader />}
            <Container>
                <Popup
                    message={popupState.message}
                    isShowing={popupState.isShowing}
                />
                <HeroLeft>
                    <Logo src={logoImg} alt="Findmeow Logo" />
                    <LoginForm onSubmit={formik.handleSubmit}>
                        <h2>Login</h2>
                        <InputField>
                            <input
                                type="text"
                                placeholder="example@gmail.com"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <ErrorMessages hasError={formik.errors.email}>
                                {formik.errors.email
                                    ? formik.errors.email
                                    : null}
                            </ErrorMessages>
                        </InputField>
                        <InputField>
                            <input
                                type={isShowingPassword ? "text" : "password"}
                                placeholder="Password"
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <div
                                onClick={() =>
                                    setIsShowingPassword(!isShowingPassword)
                                }
                            >
                                <Icon
                                    name={
                                        isShowingPassword
                                            ? "open-eye"
                                            : "close-eye"
                                    }
                                />
                            </div>
                            <ErrorMessages hasError={formik.errors.password}>
                                {formik.errors.password
                                    ? formik.errors.password
                                    : null}
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

export default LoginPage;
