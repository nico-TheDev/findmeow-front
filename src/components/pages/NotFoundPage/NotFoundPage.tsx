import React from "react";

import PageWrapper from "components/shared/PageWrapper";
import PetList from "components/PetList";

interface IProps {}

const NotFoundPage: React.FC<IProps> = () => {
    return <PageWrapper title="404 PAGE">NOT FOUND</PageWrapper>;
};

export default NotFoundPage;
