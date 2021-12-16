import React from "react";
import { useFormik, Field, FormikValues } from "formik";

import PageWrapper from "components/shared/PageWrapper";
import { InputField } from "components/shared/shared";
import { PetMain, PetButton, PetForm, PetImg } from "./styles";
import PetList from "components/PetList";

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
        },
        onSubmit: handleSubmit,
    });

    return (
        <PageWrapper title="Create Post">
            <PetMain>
                <PetImg />
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
                        <input
                            placeholder="Input Pet Description"
                            id="petDescription"
                            name="petDescription"
                            onChange={formik.handleChange}
                            value={formik.values.petDescription}
                        />
                    </InputField>
                    <PetButton>SUBMIT</PetButton>
                </PetForm>
            </PetMain>
        </PageWrapper>
    );
};

export default CreatePostPage;
