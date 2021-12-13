import React from "react";

import PageWrapper from "components/shared/PageWrapper";
import PetList from "components/PetList";

interface IProps {}

const FindPage: React.FC<IProps> = () => {
    return (
        <PageWrapper title="Find">
            <PetList />
        </PageWrapper>
    );
};

export default FindPage;
