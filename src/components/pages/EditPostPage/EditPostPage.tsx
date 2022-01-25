// @ts-nocheck
import React, { useState } from "react";
import { useFormik, FormikValues } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";

import PageWrapper from "components/shared/PageWrapper";
import BackButton from "components/shared/BackButton";
import { InputField, PreviewImg, UploadBtn } from "components/shared/shared";
import Popup from "components/Popup";
import { PetMain, PetButton, PetForm, PetImg } from "./styles";
import api from "api";
import createBG from "assets/img/create-post-bg.png";
import { useAuth } from "contexts/AuthContext";
import Loader from "components/Loader";
import placeholderImg from "assets/img/placeholder.jpg";

interface IProps {}

const EditPostPage: React.FC<IProps> = () => {
    // ROUTER STUFF
    const location = useLocation();
    const navigate = useNavigate();
    const { post, user } = location.state;

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
                    const response = await api.put(`/post/${post._id}`, {
                        editedPost: {
                            name: values.petname,
                            breed: values.breed,
                            description: values.petDescription,
                            location: values.location,
                            type: getPostType(),
                            image: targetID ? targetID : post.image,
                            userId: userID,
                        },
                        prevPublicID: post.image,
                    });
                    setIsLoading(false);

                    setPopupState({
                        isShowing: true,
                        message: "Post Updated",
                        hasButtons: false,
                    });
                    setTimeout(() => {
                        setPopupState({
                            isShowing: false,
                            ...popupState,
                        });
                    }, 2000);

                    setFileInputState("");
                    setPreviewSource("");
                    setPostImg("");
                    setPhotoID("");
                    resetForm();
                };
                reader.onerror = () => {
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
            petname: post.name,
            breed: post.breed,
            petDescription: post.description,
            location: post.location,
        },
        onSubmit: handleSubmit,
    });

    const getPostType = () => {
        const postType = post.type;
        if (postType === "adoption") return "adopt";
        if (postType === "missing") return "find";
    };

    const handleNo = () => {
        navigate(`/dashboard/${getPostType()}/${post._id}`);
    };

    return (
        <>
            {isLoading && <Loader />}
            <PageWrapper title={`Edit Post`}>
                <Popup
                    hasButtons={popupState.hasButtons}
                    message={popupState.message}
                    yesStr="Post Again"
                    noStr="Return to Newsfeed"
                    yesFunc={() =>
                        setPopupState({
                            isShowing: false,
                            message: "",
                            hasButtons: false,
                        })
                    }
                    noFunc={handleNo}
                    isShowing={popupState.isShowing}
                />
                <PetMain>
                    <BackButton path={`/dashboard/profile`} />

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
                            {!previewSource ? (
                                <Image
                                    cloudName={
                                        process.env.REACT_APP_CLOUDINARY_NAME
                                    }
                                    publicId={post?.image}
                                    width="50"
                                    height="50"
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
                        <PetButton>SUBMIT</PetButton>
                    </PetForm>
                </PetMain>
            </PageWrapper>
        </>
    );
};

export default EditPostPage;
