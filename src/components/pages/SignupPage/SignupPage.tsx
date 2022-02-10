// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, FormikValues } from "formik";
import * as yup from "yup";

import { Actions } from "types/ActionTypes";
import { useAuth } from "contexts/AuthContext";
import {
    InputField,
    ErrorMessages,
    UploadBtn,
    PreviewImg,
} from "components/shared/shared";
import api from "api";
import {
    MainContainer,
    Container,
    LoginForm,
    Left,
    Right,
    Btn,
    BackBtn,
} from "./styles";
import Icon from "components/shared/Icon";
import placeholderImg from "assets/img/placeholder.jpg";
import Loader from "components/Loader";
import Popup from "components/Popup";

interface IProps {}

export const SignupPage: React.FC<IProps> = () => {
    // ROUTER STATE
    const navigate = useNavigate();
    // AUTH STATE
    const { authDispatch } = useAuth();
    // DATA STATE
    const [isLoading, setIsLoading] = useState(false);
    const [popupState, setPopupState] = useState({
        message: "",
        isShowing: false,
        hasButtons: false,
    });

    // FILE UPLOAD STATE
    const [profileImg, setProfileImg] = useState("");
    const [fileInputState, setFileInputState] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const [photoID, setPhotoID] = useState("");

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const uploadImage = async (base64EncodedImage: string) => {
        try {
            const uploadResponse = await api.post("/api/upload", {
                data: base64EncodedImage,
                type: "user",
            });
            return uploadResponse.data.public_id;
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = async (values: FormikValues) => {
        try {
            if (fileInputState) {
                setIsLoading(true);
                const reader = new FileReader();
                reader.readAsDataURL(profileImg);
                reader.onloadend = async () => {
                    const targetID = await uploadImage(reader.result);
                    setPhotoID(targetID);
                    const response = await api.post("/signup", {
                        email: values.email,
                        password: values.password,
                        name: values.name,
                        username: values.username,
                        location: values.location,
                        contact: values.contact,
                        profileImg: targetID,
                    });
                    setIsLoading(false);

                    authDispatch({
                        type: Actions.SET_USER,
                        payload: response.data,
                    });
                    authDispatch({
                        type: Actions.SET_TOKEN,
                        payload: {
                            token: response.data.token,
                            userID: response.data.userID,
                        },
                    });
                    navigate("/dashboard/home");
                };
            } else {
                setPopupState({
                    isShowing: true,
                    message: "You need a profile picture",
                });
            }
        } catch (err) {
            setPopupState({
                isShowing: true,
                ...popupState,
                message: err,
            });
        } finally {
            setTimeout(() => {
                setPopupState({
                    isShowing: false,
                    ...popupState,
                });
            }, 1500);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetFile = e.target.files[0];
        previewFile(targetFile);
        setFileInputState(e.target.value);
        setProfileImg(targetFile);
    };

    const phoneRegex =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
        contact: yup
            .string()
            .matches(phoneRegex, "Invalid Phone Number")
            .required("Contact is required")
            .max(11, "Invalid Phone Number Length"),
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
        navigate(-1);
    };

    return (
        <MainContainer>
            {isLoading && <Loader />}
            <Popup
                hasButtons={popupState.hasButtons}
                message={popupState.message}
                isShowing={popupState.isShowing}
            />
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
                        <UploadBtn>
                            <PreviewImg
                                src={previewSource || placeholderImg}
                                alt="Preview Photo"
                            />
                            <input
                                type="file"
                                id="profileImg"
                                name="profileImg"
                                onChange={handleFileChange}
                                accept=".png,.jpeg,.jpg"
                                value={fileInputState}
                            />
                        </UploadBtn>
                        <Btn type="submit">Submit</Btn>
                    </Right>
                </LoginForm>
            </Container>
        </MainContainer>
    );
};

export default SignupPage;
