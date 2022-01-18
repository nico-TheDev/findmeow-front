// @ts-nocheck
import React, { useState } from "react";
import { useFormik, FormikValues } from "formik";
import { useLocation, useNavigate } from "react-router-dom";

import PageWrapper from "components/shared/PageWrapper";
import BackButton from "components/shared/BackButton";
import { InputField } from "components/shared/shared";
import Popup from "components/Popup";
import {
    PetMain,
    PetButton,
    PetForm,
    PetImg,
    RadioGroup,
    UploadBtn,
} from "./styles";
import api from "api";
import createBG from "assets/img/create-post-bg.png";
import { useAuth } from "contexts/AuthContext";
import capitalizeFirstLetter from "util/capitalizeFirstLetter";

interface IProps {}

const CreatePostPage: React.FC<IProps> = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { type: postType } = location.state;
    const [postImg, setPostImg] = useState("");
    const { authState } = useAuth();
    const { userID } = authState;
    const [popupState, setPopupState] = useState({
        isShowing: true,
        message: "Post Created",
    });

    const handleSubmit = async (values: FormikValues, { resetForm }) => {
        const postData = new FormData();
        try {
            postData.append("name", values.petname);
            postData.append("breed", values.breed);
            postData.append("description", values.petDescription);
            postData.append("location", values.location);
            postData.append("type", postType);
            postData.append("imgFile", postImg);
            postData.append("userId", userID);
            console.log(values, postImg);

            const response = await api.post("/post/create", postData);

            console.log(response);
            resetForm();
            setPostImg("");
        } catch (err) {
            console.log(err);
        }
    };

    const handleFileChange = (e) => {
        setPostImg(e.target.files[0]);
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
        if (postType === "adoption") navigate("/dashboard/adopt");
        if (postType === "missing") navigate("/dashboard/find");
    };

    return (
        <PageWrapper title={`Create Post (${capitalizeFirstLetter(postType)})`}>
            {popupState.isShowing && (
                <Popup
                    hasButtons={true}
                    message={popupState.message}
                    yesStr="Post Again"
                    noStr="Return to Newsfeed"
                    yesFunc={() =>
                        setPopupState({ isShowing: false, ...popupState })
                    }
                    noFunc={handleNo()}
                />
            )}
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
                        <input
                            type="file"
                            id="imgFile"
                            name="imgFile"
                            accept=".png,.jpeg,.jpg"
                            onChange={handleFileChange}
                        />
                    </UploadBtn>
                    <PetButton>SUBMIT</PetButton>
                </PetForm>
            </PetMain>
        </PageWrapper>
    );
};

export default CreatePostPage;
