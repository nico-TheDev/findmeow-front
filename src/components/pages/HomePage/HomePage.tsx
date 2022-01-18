import React from "react";

import catImg from "assets/img/adopt-img.png";
import globeImg from "assets/img/find-img-home.png";
import PageWrapper from "components/shared/PageWrapper";
import Card from "components/Card";

import { CardContainer } from "./styles";

interface IProps {}

const HomePage: React.FC<IProps> = () => {
    return (
        <PageWrapper title="Home">
            <CardContainer>
                <Card
                    img={catImg}
                    description="If you’re taking care of a pet temporarily, you can set up an adoption post. You may also see if others’ pets are available for adoption."
                    path="/dashboard/adopt"
                    pathName="View Newsfeed"
                    title="Adopt"
                    type="adoption"
                />
                <Card
                    img={globeImg}
                    description="If you’re missing a pet, you can set up a post so you can find them. You may also see if you found others’ pets."
                    path="/dashboard/find"
                    pathName="View Newsfeed"
                    title="Find"
                    type="missing"
                />
            </CardContainer>
        </PageWrapper>
    );
};

export default HomePage;
