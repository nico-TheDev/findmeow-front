import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "api";
import PageWrapper from "components/shared/PageWrapper";
import {
    PetMain,
    PetBottom,
    PetLeft,
    PetLocation,
    PetRight,
    PetBtn,
} from "./styles";
import { PetDetails } from "types/ActionTypes";
import formatDate from "util/formatDate";

interface IProps {
    type?: string;
}

const PetProfilePage: React.FC<IProps> = () => {
    const { id } = useParams();
    const [petDetails, setPetDetails] = useState<PetDetails | null | undefined>(
        null
    );
    const [postOwnerSrc, setPostOwnerSrc] = useState<
        { name: string; src: string } | null | undefined
    >(null);
    const [postImgSrc, setPostImgSrc] = useState("");

    const handleContact = () => {
        console.log("go to owner");
    };

    useEffect(() => {
        const getPetDetails = async () => {
            const postResponse = await api.get(`/post/${id}`);
            console.log(postResponse.data);
            setPetDetails(postResponse.data);
            setPostImgSrc(
                `${process.env.REACT_APP_IMG_PATH}${postResponse.data?.image}`
            );

            const postOwnerResponse = await api.get(
                `/user/${postResponse.data?.userId}`
            );
            const postOwner = postOwnerResponse.data.user;
            console.log(postOwnerResponse.data);
            setPostOwnerSrc({
                src: `${process.env.REACT_APP_IMG_PATH}${postOwner?.profileImg}`,
                name: postOwner.name,
            });
        };
        getPetDetails();
    }, [id]);

    return (
        <PageWrapper title="Pet Profile">
            <PetMain>
                <PetLeft>
                    <img src={postImgSrc} alt="" />
                    <PetBottom>
                        <img src={postOwnerSrc?.src} alt="" />
                        <h4>{postOwnerSrc?.name}</h4>
                    </PetBottom>
                </PetLeft>
                <PetRight>
                    <h4>{petDetails?.name}</h4>
                    <PetLocation>
                        <h6>{petDetails?.location}</h6>
                        <h6>
                            {petDetails && formatDate(petDetails?.createdAt)}
                        </h6>
                    </PetLocation>

                    <p>{petDetails?.description}</p>

                    <PetBtn onClick={handleContact}>Contact Owner</PetBtn>
                </PetRight>
            </PetMain>
        </PageWrapper>
    );
};

export default PetProfilePage;
