import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageWrapper from "components/shared/PageWrapper";
import PetList from "components/PetList";
import globeBg from "assets/img/globe-bg.png";
import catBg from "assets/img/cat-bg.png";

interface IProps {}

const PetProfilePage: React.FC<IProps> = () => {
    const { id } = useParams();
    const [petDetails, setPetDetails] = useState();

    useEffect(() => {
        // FIND PET IN DB
        // ASSIGN PET TO DETAILS
        // DISPLAY IT
    }, [id]);

    return (
        <PageWrapper title="Pet Profile" imgSrc={globeBg}>
            <div></div>{" "}
        </PageWrapper>
    );
};

export default PetProfilePage;
