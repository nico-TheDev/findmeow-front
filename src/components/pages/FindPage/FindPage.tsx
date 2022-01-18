import React from "react";

import PageWrapper from "components/shared/PageWrapper";
import CreateButton from "components/shared/CreateButton";
import PetList from "components/PetList";
import globeBg from "assets/img/globe-bg.png";

interface IProps {}

const FindPage: React.FC<IProps> = () => {
    return (
        <PageWrapper title="Find" imgSrc={globeBg}>
            <PetList type="find" />
            <CreateButton path="/dashboard/post/create" type="missing" />
        </PageWrapper>
    );
};

export default FindPage;
