// @ts-nocheck
import React, { useState } from "react";
import { useFormik, FormikValues } from "formik";
import { useLocation, useNavigate } from "react-router-dom";

import PageWrapper from "components/shared/PageWrapper";
import BackButton from "components/shared/BackButton";
import { InputField, PreviewImg, UploadBtn } from "components/shared/shared";
import Popup from "components/Popup";
import { PetMain, PetButton, PetForm, PetImg } from "./styles";
import api from "api";
import createBG from "assets/img/create-post-bg.png";
import { useAuth } from "contexts/AuthContext";
import capitalizeFirstLetter from "util/capitalizeFirstLetter";
import Loader from "components/Loader";
import placeholderImg from "assets/img/placeholder.jpg";

interface IProps {}

const CreatePostPage: React.FC<IProps> = () => {
    // ROUTER STUFF
    const location = useLocation();
    const navigate = useNavigate();
    const { type: postType } = location.state;

    // LOADER STATE
    const [popupState, setPopupState] = useState({
        isShowing: false,
        message: "",
        hasButtons: false,
    });
    const [isLoading, setIsLoading] = useState(false);

    // AUTH STATE
    const { authState } = useAuth();
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
                type: "post",
            });

            console.log(uploadResponse.data.asset_id);
            setPhotoID(uploadResponse.data.asset_id);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = async (values: FormikValues, { resetForm }) => {
        try {
            // SHOW LOADER
            setIsLoading(true);

            // IMAGE UPLOAD STUFF
            const reader = new FileReader();
            reader.readAsDataURL(postImg);
            reader.onloadend = async () => {
                uploadImage(reader.result);
                const response = await api.post("/post/create", {
                    name: values.petname,
                    breed: values.breed,
                    description: values.petDescription,
                    location: values.location,
                    type: postType,
                    imgFile: photoID,
                    userId: userID,
                });
                setIsLoading(false);

                setPopupState({
                    isShowing: true,
                    message: "Post Created",
                    hasButtons: true,
                });
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
            }, 2000);
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
            petname: "",
            breed: "",
            petDescription: "",
            location: "",
        },
        onSubmit: handleSubmit,
    });

    const handleNo = () => {
        if (postType === "adoption") {
            navigate("/dashboard/adopt");
        }
        if (postType === "missing") {
            navigate("/dashboard/find");
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            <PageWrapper
                title={`Create Post (${capitalizeFirstLetter(postType)})`}
            >
                <Popup
                    hasButtons={popupState.hasButtons}
                    message={popupState.message}
                    yesStr="Post Again"
                    noStr="Return to Newsfeed"
                    yesFunc={() =>
                        setPopupState({
                            isShowing: false,
                            ...popupState,
                        })
                    }
                    noFunc={handleNo}
                    isShowing={popupState.isShowing}
                />
                <PetMain>
                    <BackButton
                        path={`/dashboard/${
                            postType === "adoption" ? "adopt" : "find"
                        }`}
                    />

                    <PetImg src={createBG} />
                    <PetForm onSubmit={formik.handleSubmit} id="petDetails">
                        <InputField>
                            <input
                                type="text"
                                placeholder="Input Pet Name"
                                id="petname"
                                name="petname"
                                onChange={formik.handleChange}
                                value={formik.values.petname}
                            />
                        </InputField>
                        <InputField>
                            <input
                                type="text"
                                placeholder="Input Pet Breed"
                                id="breed"
                                name="breed"
                                onChange={formik.handleChange}
                                value={formik.values.breed}
                            />
                        </InputField>
                        <InputField>
                            <input
                                type="text"
                                placeholder="Input Pet Location/Last Seen"
                                id="location"
                                name="location"
                                onChange={formik.handleChange}
                                value={formik.values.location}
                            />
                        </InputField>

                        <InputField>
                            <textarea
                                placeholder="Input Pet Description"
                                id="petDescription"
                                name="petDescription"
                                onChange={formik.handleChange}
                                value={formik.values.petDescription}
                            />
                        </InputField>
                        <UploadBtn>
                            <PreviewImg
                                src={previewSource || placeholderImg}
                                alt="Preview Photo"
                            />
                            <input
                                type="file"
                                id="imgFile"
                                name="imgFile"
                                accept=".png,.jpeg,.jpg"
                                onChange={handleFileChange}
                                value={fileInputState}
                            />
                        </UploadBtn>
                        <PetButton>SUBMIT</PetButton>
                    </PetForm>
                </PetMain>
            </PageWrapper>
        </>
    );
};

export default CreatePostPage;
