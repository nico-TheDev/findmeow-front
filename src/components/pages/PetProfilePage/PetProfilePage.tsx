// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Image, Placeholder } from "cloudinary-react";

import api from "api";
import PageWrapper from "components/shared/PageWrapper";
import {
    PetMain,
    PetBottom,
    PetLeft,
    PetLocation,
    PetRight,
    PetBtn,
    PetDescription,
} from "./styles";
import { PetDetails } from "types/ActionTypes";
import formatDate from "util/formatDate";
import BackButton from "components/shared/BackButton";
import usePostDetails from "hooks/usePostDetails";
import Spinner from "components/Spinner";
import { useAuth } from "contexts/AuthContext";

interface IProps {
    type?: string;
}

const PetProfilePage: React.FC<IProps> = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { authState } = useAuth();
    const { userID: currentUserID } = authState;
    const { details, isLoading } = usePostDetails(id);

    const handleContact = () => {
        console.log(details);
        navigate(`/dashboard/profile/${details.post.userId}`, {
            state: details,
        });
    };

    if (isLoading) return <Spinner />;

    return (
        <PageWrapper title="Pet Profile">
            <PetMain>
                <BackButton path={`/dashboard/home`} />

                <PetLeft>
                    <Image
                        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                        publicId={details?.post?.image}
                        width="350"
                        height="350"
                    >
                        <Placeholder type="pixelated" />
                    </Image>
                    <PetBottom>
                        <Image
                            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                            publicId={details?.user?.profileImg}
                            radius="max"
                            width="40"
                            height="40"
                        />{" "}
                        <h4>{details?.user?.name}</h4>
                    </PetBottom>
                </PetLeft>
                <PetRight>
                    <h4>{details?.post?.name}</h4>
                    <h5>{details?.post?.breed}</h5>
                    <PetLocation>
                        <h6>{details?.post?.location}</h6>
                        <h6>
                            {details && formatDate(details?.post?.createdAt)}
                        </h6>
                    </PetLocation>

                    <PetDescription>
                        {details?.post?.description}
                    </PetDescription>

                    {currentUserID !== details.post.userId && (
                        <PetBtn onClick={handleContact}>Contact Owner</PetBtn>
                    )}
                </PetRight>
            </PetMain>
        </PageWrapper>
    );
};

export default PetProfilePage;
