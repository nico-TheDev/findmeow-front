import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik, FormikHelpers, FormikValues } from "formik";

import { InputField } from "components/shared/shared";

import {
    MainContainer,
    Container,
    LoginForm,
    Left,
    Right,
    Btn,
    Upload,
} from "./styles";

import logoImg from "assets/img/findmeow-logo-2.png";
import heroImg from "assets/img/landing-img-1.png";

interface IProps {}

export const SignupPage: React.FC<IProps> = () => {
    const navigate = useNavigate();
    const handleSubmit = (values: FormikValues) => {
        console.log(values);
        navigate("/dashboard/home");
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
            username: "",
            location: "",
            contact: "",
            photo: "",
        },
        onSubmit: handleSubmit,
    });

    return (
        <MainContainer>
            <Container>
                <LoginForm onSubmit={formik.handleSubmit}>
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
                                id="photo"
                                name="photo"
                                onChange={formik.handleChange}
                                value={formik.values.photo}
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
