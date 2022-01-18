import React from "react";

import PageWrapper from "components/shared/PageWrapper";
import CreateButton from "components/shared/CreateButton";
import PetList from "components/PetList";
import globeBg from "assets/img/globe-bg.png";
import usePostCollection from "hooks/usePostCollectiion";
import Spinner from "components/Spinner";
interface IProps {}

const FindPage: React.FC<IProps> = () => {
    const { collection, isLoading, isError } = usePostCollection(
        "/post/find/timeline"
    );

    if (isLoading) return <Spinner />;
    return (
        <PageWrapper title="Find" imgSrc={globeBg}>
            <PetList collection={collection} type="missing" />
            <CreateButton path="/dashboard/post/create" type="missing" />
        </PageWrapper>
    );
};

export default FindPage;
