import React from "react";

import PageWrapper from "components/shared/PageWrapper";
import PetList from "components/PetList";
import catBg from "assets/img/cat-bg.png";

interface IProps {}

const AdoptPage: React.FC<IProps> = () => {
    return (
        <PageWrapper title="Adopt" imgSrc={catBg}>
            <PetList type="adopt" />
        </PageWrapper>
    );
};

export default AdoptPage;
