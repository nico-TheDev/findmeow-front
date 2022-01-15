// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, FormikValues } from "formik";

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

interface IProps {}

interface ErrorType {
    email: string;
    password: string;
    name: string;
    username: string;
    location: string;
    contact: string;
    profileImg: string;
}

export const SignupPage: React.FC<IProps> = () => {
    const navigate = useNavigate();
    const { authDispatch } = useAuth();
    const [profileImg, setProfileImg] = useState("");

    const handleSubmit = async (values: FormikValues) => {
        try {
            const formData = new FormData();

            formData.append("email", values.email);
            formData.append("password", values.password);
            formData.append("name", values.name);
            formData.append("username", values.username);
            formData.append("location", values.location);
            formData.append("contact", values.contact);
            formData.append("profileImg", profileImg);

            const response = await api.post("/signup", formData);
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

    const signupValidator = (values: FormikValues) => {
        let errors: ErrorType = {
            email: "",
            password: "",
            name: "",
            username: "",
            location: "",
            contact: "",
        };

        if (!validateEmail(values.email)) {
            errors.email = "Invalid email";
        }

        if (values.email.length === 0) {
            errors.email = "Email is required";
        }
        if (values.password.length === 0) {
            errors.password = "Password is required";
        }
        if (values.name.length === 0) {
            errors.name = "Name is required";
        }
        if (values.username.length === 0) {
            errors.username = "Username is required";
        }
        if (values.location.length === 0) {
            errors.location = "Location is required";
        }
        if (values.contact.length === 0) {
            errors.contact = "Contact information is required";
        }
        if (values.password.length < 6) {
            errors.password = "Minimum password length is 6 characters";
        }

        return errors;
    };

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
    });

    const handleBack = () => {
        navigate("/");
    };

    return (
        <MainContainer>
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
                                placeholder="Email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <ErrorMessages hasError={formik.errors.email}>
                                {formik.errors.email ||
                                    "Example:juandelacruz@gmail.com"}
                            </ErrorMessages>{" "}
                        </InputField>
                        <InputField>
                            <input
                                type="text"
                                placeholder="Username"
                                id="username"
                                name="username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            <ErrorMessages hasError={formik.errors.username}>
                                {formik.errors.username ||
                                    "Example:jndlcrz2022"}
                            </ErrorMessages>
                        </InputField>
                        <InputField>
                            <input
                                type="text"
                                placeholder="Name"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            <ErrorMessages hasError={formik.errors.name}>
                                {formik.errors.name ||
                                    "Example: Juan Dela Cruz"}
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
                                {formik.errors.location ||
                                    "Example: Metro Manila"}
                            </ErrorMessages>{" "}
                        </InputField>
                    </Left>

                    <Right>
                        <InputField>
                            <input
                                type="text"
                                placeholder="Contact"
                                id="contact"
                                name="contact"
                                onChange={formik.handleChange}
                                value={formik.values.contact}
                            />
                            <ErrorMessages hasError={formik.errors.contact}>
                                {formik.errors.contact ||
                                    "Example: 09123451212"}
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
                                {formik.errors.password ||
                                    "Minimum of 6 characters"}
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
