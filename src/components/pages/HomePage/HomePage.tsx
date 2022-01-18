import React from "react";

import catImg from "assets/img/adopt-img.png";
import globeImg from "assets/img/find-img-home.png";
import PageWrapper from "components/shared/PageWrapper";
import Card from "components/Card";
import PetList from "components/PetList";

import { CardContainer } from "./styles";
import usePostCollection from "hooks/usePostCollectiion";
import Spinner from "components/Spinner";

interface IProps {}

const HomePage: React.FC<IProps> = () => {
    const { collection, isLoading } = usePostCollection("/post/all/newsfeed");
    if (isLoading) return <Spinner />;
    return (
        <PageWrapper title="Home">
            <PetList collection={collection} />
        </PageWrapper>
    );
};

export default HomePage;
