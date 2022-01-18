import React from "react";

import PageWrapper from "components/shared/PageWrapper";
import CreateButton from "components/shared/CreateButton";
import PetList from "components/PetList";
import catBg from "assets/img/cat-bg.png";
import usePostCollection from "hooks/usePostCollectiion";
import Spinner from "components/Spinner";

interface IProps {}

const AdoptPage: React.FC<IProps> = () => {
    const { collection, isLoading, isError } = usePostCollection(
        "/post/adopt/timeline"
    );

    if (isLoading) return <Spinner />;
    return (
        <PageWrapper title="Adopt" imgSrc={catBg}>
            <PetList type="adopt" collection={collection} />
            <CreateButton path="/dashboard/post/create" type="adoption" />
        </PageWrapper>
    );
};

export default AdoptPage;
