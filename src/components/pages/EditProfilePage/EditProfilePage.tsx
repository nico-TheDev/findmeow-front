// @ts-nocheck
import React, { useState } from "react";
import { useFormik, FormikValues } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";

import PageWrapper from "components/shared/PageWrapper";
import BackButton from "components/shared/BackButton";
import { InputField, PreviewImg, UploadBtn } from "components/shared/shared";
import Popup from "components/Popup";
import { PetMain, PetButton, PetForm, PetImg, ProfileCard } from "./styles";
import api from "api";
import { useAuth } from "contexts/AuthContext";
import Loader from "components/Loader";
import { Actions } from "types/ActionTypes";

interface IProps {}

const EditProfilePage: React.FC<IProps> = () => {
    // ROUTER STUFF
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = location.state;

    // LOADER STATE
    const [popupState, setPopupState] = useState({
        isShowing: false,
        message: "",
        hasButtons: false,
    });
    const [isLoading, setIsLoading] = useState(false);

    // AUTH STATE
    const { authState, authDispatch } = useAuth();
    const { userID } = authState;

    // FILE UPLOAD STATE
    const [postImg, setPostImg] = useState("");
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
            return "";
        }
    };

    const handleSubmit = async (values: FormikValues, { resetForm }) => {
        try {
            if (fileInputState) {
                // SHOW LOADER
                setIsLoading(true);

                // IMAGE UPLOAD STUFF
                const reader = new FileReader();
                reader.readAsDataURL(postImg);
                reader.onloadend = async () => {
                    const targetID = await uploadImage(reader.result);
                    const updateResponse = await api.put(`/user/${user.id}`, {
                        editedProfile: {
                            name: values.name,
                            location: values.location,
                            contact: values.contact,
                            email: values.email,
                            id: user.id,
                            profileImg: targetID ? targetID : user.profileImg,
                        },
                        prevPublicID: user.profileImg,
                    });
                    setIsLoading(false);
                    authDispatch({
                        type: Actions.SET_USER,
                        payload: {
                            user: updateResponse.data.updatedUser,
                        },
                    });
                    setPopupState({
                        isShowing: true,
                        message: "Profile Updated",
                        hasButtons: false,
                    });
                    setTimeout(() => {
                        setPopupState({
                            isShowing: false,
                            ...popupState,
                        });

                        navigate("/dashboard/home");
                    }, 2000);

                    setFileInputState("");
                    setPreviewSource("");
                    setPostImg("");
                    setPhotoID("");
                    resetForm();
                };
                reader.onerror = () => {
                    console.log("ERROR IN UPLOADING PHOTO");
                    setPopupState({
                        isShowing: true,
                        message: "Error in uploading",
                        hasButtons: false,
                    });
                };
            } else {
                setPopupState({
                    isShowing: true,
                    message: "You need a profile picture",
                    hasButtons: false,
                });
            }
        } catch (err) {
            setPopupState({
                isShowing: true,
                message: "Something Went Wrong",
                hasButtons: false,
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

    const handleFileChange = (e) => {
        const targetFile = e.target.files[0];
        previewFile(targetFile);
        setFileInputState(e.target.value);
        setPostImg(targetFile);
    };

    const formik = useFormik({
        initialValues: {
            name: user.name,
            location: user.location,
            contact: user.contact,
            email: user.email,
        },
        onSubmit: handleSubmit,
    });

    return (
        <>
            {isLoading && <Loader />}
            <PageWrapper title={`Edit Post`}>
                <Popup
                    hasButtons={popupState.hasButtons}
                    message={popupState.message}
                    isShowing={popupState.isShowing}
                />
                <PetMain>
                    <BackButton path={`/dashboard/profile`} />

                    <ProfileCard>
                        <UploadBtn>
                            {!previewSource ? (
                                <Image
                                    cloudName={
                                        process.env.REACT_APP_CLOUDINARY_NAME
                                    }
                                    publicId={user?.profileImg}
                                    width="300"
                                    height="300"
                                />
                            ) : (
                                <PreviewImg
                                    src={previewSource}
                                    alt="Preview Photo"
                                />
                            )}
                            <input
                                type="file"
                                id="imgFile"
                                name="imgFile"
                                accept=".png,.jpeg,.jpg"
                                onChange={handleFileChange}
                                value={fileInputState}
                            />
                        </UploadBtn>
                    </ProfileCard>
                    <PetForm onSubmit={formik.handleSubmit} id="petDetails">
                        <InputField>
                            <input
                                type="text"
                                placeholder="Input Name"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </InputField>
                        <InputField>
                            <input
                                type="text"
                                placeholder="Input Location"
                                id="location"
                                name="location"
                                onChange={formik.handleChange}
                                value={formik.values.location}
                            />
                        </InputField>
                        <InputField>
                            <input
                                type="text"
                                placeholder="Input Contact Number"
                                id="contact"
                                name="contact"
                                onChange={formik.handleChange}
                                value={formik.values.contact}
                            />
                        </InputField>

                        <InputField>
                            <input
                                type="text"
                                placeholder="Input email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </InputField>

                        <PetButton>SUBMIT</PetButton>
                    </PetForm>
                </PetMain>
            </PageWrapper>
        </>
    );
};

export default EditProfilePage;
