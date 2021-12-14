import React from "react";

import PageWrapper from "components/shared/PageWrapper";
import PetList from "components/PetList";
import globeBg from "assets/img/globe-bg.png";

interface IProps {}

const FindPage: React.FC<IProps> = () => {
    return (
        <PageWrapper title="Find" imgSrc={globeBg}>
            <PetList type="find" />
        </PageWrapper>
    );
};

export default FindPage;
