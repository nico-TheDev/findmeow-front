// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, FormikValues } from "formik";

import { Actions } from "types/ActionTypes";
import { useAuth } from "contexts/AuthContext";
import { InputField } from "components/shared/shared";
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

interface IProps {}

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
            console.log(response);

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
                            <span>Example:name@email.com</span>
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
                            <span>Example:jndlcrz2022</span>
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
                            <span>Example:Juan Dela Cruz</span>
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
                            <span>Example:Manila</span>
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
                        <Upload>
                            <input
                                type="file"
                                id="profileImg"
                                name="profileImg"
                                onChange={handleFileChange}
                                accept=".png,.jpeg,.jpg"
                            />
                        </Upload>
                        <Btn>Submit</Btn>
                    </Right>
                </LoginForm>
            </Container>
        </MainContainer>
    );
};

export default SignupPage;
