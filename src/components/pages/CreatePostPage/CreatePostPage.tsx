import React from "react";

import PageWrapper from "components/shared/PageWrapper";
import { PetMain, PetButton, PetForm } from "./styles";
import PetList from "components/PetList";

interface IProps {}

const CreatePostPage: React.FC<IProps> = () => {
    return (
        <PageWrapper title="Create Post">
            <PetMain>
                <PetForm></PetForm>
                <PetButton>SUBMIT</PetButton>
            </PetMain>
        </PageWrapper>
    );
};

export default CreatePostPage;
