// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, FormikValues } from "formik";
import * as yup from "yup";

import { Actions } from "types/ActionTypes";
import { useAuth } from "contexts/AuthContext";
import { InputField, ErrorMessages } from "components/shared/shared";
import api from "api";
import {
    MainContainer,
    Container,
    LoginForm,
    Left,
    Right,
    Btn,
    Upload,
    BackBtn,
} from "./styles";
import Icon from "components/shared/Icon";
import validateEmail from "util/validateEmail";
import Loader from "components/Loader";
interface IProps {}

export const SignupPage: React.FC<IProps> = () => {
    const navigate = useNavigate();
    const { authDispatch } = useAuth();
    const [profileImg, setProfileImg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (values: FormikValues) => {
        try {
            setIsLoading(true);
            const formData = new FormData();

            formData.append("email", values.email);
            formData.append("password", values.password);
            formData.append("name", values.name);
            formData.append("username", values.username);
            formData.append("location", values.location);
            formData.append("contact", values.contact);
            formData.append("profileImg", profileImg);

            const response = await api.post("/signup", formData);
            setIsLoading(false);

            authDispatch({ type: Actions.SET_USER, payload: response.data });
            authDispatch({
                type: Actions.SET_TOKEN,
                payload: {
                    token: response.data.token,
                    userID: response.data.userID,
                },
            });
            navigate("/dashboard/home");
        } catch (err) {
            console.log(err);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setProfileImg(target.files[0]);
        console.log(target.files[0]);
    };

    const SignupSchema = yup.object({
        email: yup
            .string()
            .email("Invalid email")
            .required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must not be less than 6 characters"),
        name: yup.string().required("Name is required"),
        username: yup
            .string()
            .required("Username is required")
            .max(20, "Maximum of 20 characters"),
        location: yup.string().required("Location is required"),
        contact: yup.string().required("Contact is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
            username: "",
            location: "",
            contact: "",
            profileImg: "",
        },
        onSubmit: handleSubmit,
        validationSchema: SignupSchema,
    });

    const handleBack = () => {
        navigate("/");
    };

    return (
        <MainContainer>
            {isLoading && <Loader />}
            <Container>
                <BackBtn onClick={handleBack}>
                    <Icon name="close" />
                </BackBtn>
                <LoginForm
                    onSubmit={formik.handleSubmit}
                    encType="multipart/form-data"
                >
                    <h2>Sign Up</h2>
                    <Left>
                        <InputField>
                            <input
                                type="text"
                                placeholder="exampl@gmail.com"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <ErrorMessages hasError={formik.errors.email}>
                                {formik.errors.email || null}
                            </ErrorMessages>{" "}
                        </InputField>
                        <InputField>
                            <input
                                type="text"
                                placeholder="jndlcrz1234"
                                id="username"
                                name="username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            <ErrorMessages hasError={formik.errors.username}>
                                {formik.errors.username || null}
                            </ErrorMessages>
                        </InputField>
                        <InputField>
                            <input
                                type="text"
                                placeholder="Juan Dela Cruz"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            <ErrorMessages hasError={formik.errors.name}>
                                {formik.errors.name || null}
                            </ErrorMessages>{" "}
                        </InputField>
                        <InputField>
                            <input
                                type="text"
                                placeholder="Location"
                                id="location"
                                name="location"
                                onChange={formik.handleChange}
                                value={formik.values.location}
                            />
                            <ErrorMessages hasError={formik.errors.location}>
                                {formik.errors.location || null}
                            </ErrorMessages>{" "}
                        </InputField>
                    </Left>

                    <Right>
                        <InputField>
                            <input
                                type="text"
                                placeholder="0912*****123"
                                id="contact"
                                name="contact"
                                onChange={formik.handleChange}
                                value={formik.values.contact}
                            />
                            <ErrorMessages hasError={formik.errors.contact}>
                                {formik.errors.contact || null}
                            </ErrorMessages>{" "}
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
                                {formik.errors.password || null}
                            </ErrorMessages>{" "}
                        </InputField>
                        <Upload>
                            <input
                                type="file"
                                id="profileImg"
                                name="profileImg"
                                onChange={handleFileChange}
                                accept=".png,.jpeg,.jpg"
                            />
                        </Upload>
                        <Btn type="submit">Submit</Btn>
                    </Right>
                </LoginForm>
            </Container>
        </MainContainer>
    );
};

export default SignupPage;
