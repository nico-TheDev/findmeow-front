import React from "react";

import PageWrapper from "components/shared/PageWrapper";
import CreateButton from "components/shared/CreateButton";
import PetList from "components/PetList";
import catBg from "assets/img/cat-bg.png";

interface IProps {}

const AdoptPage: React.FC<IProps> = () => {
    return (
        <PageWrapper title="Adopt" imgSrc={catBg}>
            <PetList type="adopt" />
            <CreateButton path="/dashboard/post/create" />
        </PageWrapper>
    );
};

export default AdoptPage;
