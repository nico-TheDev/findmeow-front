// @ts-nocheck
import React, { useState } from "react";
import { useFormik, FormikValues } from "formik";

import PageWrapper from "components/shared/PageWrapper";
import { InputField } from "components/shared/shared";
import {
    PetMain,
    PetButton,
    PetForm,
    PetImg,
    RadioGroup,
    UploadBtn,
} from "./styles";
import api from "api";
import PetList from "components/PetList";
import createBG from "assets/img/create-post-bg.png";
import { useAuth } from "contexts/AuthContext";

interface IProps {}

const CreatePostPage: React.FC<IProps> = () => {
    const [postImg, setPostImg] = useState("");
    const { authState } = useAuth();
    const { userID } = authState;
    const handleSubmit = async (values: FormikValues) => {
        const postData = new FormData();
        try {
            postData.append("name", values.petname);
            postData.append("breed", values.breed);
            postData.append("description", values.petDescription);
            postData.append("location", values.location);
            postData.append("type", values.type);
            postData.append("imgFile", postImg);
            postData.append("userId", userID);
            console.log(values, postImg);

            const response = await api.post("/post/create", postData);

            console.log(response);
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
            type: "",
        },
        onSubmit: handleSubmit,
    });

    return (
        <PageWrapper title="Create Post">
            <PetMain>
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
                    <RadioGroup role="group" aria-labelledby="my-radio-group">
                        <label>
                            <input
                                type="radio"
                                id="missing"
                                name="type"
                                value="Missing"
                                onChange={formik.handleChange}
                            />
                            Missing
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="adoption"
                                name="type"
                                value="Adoption"
                                onChange={formik.handleChange}
                            />
                            Adoption
                        </label>
                    </RadioGroup>
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
