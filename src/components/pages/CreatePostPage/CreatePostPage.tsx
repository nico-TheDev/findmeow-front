import React from "react";
import { useFormik, Field, FormikValues } from "formik";

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
import PetList from "components/PetList";
import createBG from "assets/img/create-post-bg.png";

interface IProps {}

const CreatePostPage: React.FC<IProps> = () => {
    const handleSubmit = (values: FormikValues) => {
        console.log(values);
    };
    const formik = useFormik({
        initialValues: {
            petname: "",
            breed: "",
            petDescription: "",
            location: "",
            type: "",
            imgFile: "",
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
                            accept="image/png, image/jpeg"
                        />
                    </UploadBtn>
                    <PetButton>SUBMIT</PetButton>
                </PetForm>
            </PetMain>
        </PageWrapper>
    );
};

export default CreatePostPage;
