// @ts-nocheck
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Image, Placeholder } from "cloudinary-react";

import PageWrapper from "components/shared/PageWrapper";
import {
    PetMain,
    PetBottom,
    PetLeft,
    PetLocation,
    PetRight,
    PetBtn,
    PetDescription,
    PetBtnHolder,
} from "./styles";
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
        navigate(`/dashboard/profile/${details?.post.userId}`, {
            state: details,
        });
    };

    const handleEdit = () => {
        navigate(`/dashboard/edit_post`, {
            state: details,
        });
    };

    const handleCompleted = () => {};

    const getType = () => {
        console.log(details);
        const postType = details?.post.type;
        if (postType === "adoption") return "adopt";
        if (postType === "missing") return "find";
    };

    if (isLoading) return <Spinner />;

    return (
        <PageWrapper title="Pet Profile">
            <PetMain>
                <BackButton
                    path={`/dashboard/${details.post ? getType() : "home"}`}
                />

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

                    {currentUserID !== details.post.userId ? (
                        <PetBtn onClick={handleContact}>Contact Owner</PetBtn>
                    ) : (
                        <PetBtnHolder>
                            <PetBtn onClick={handleEdit}>Edit Post</PetBtn>
                            <PetBtn onClick={handleCompleted}>
                                Mark as completed
                            </PetBtn>
                        </PetBtnHolder>
                    )}
                </PetRight>
            </PetMain>
        </PageWrapper>
    );
};

export default PetProfilePage;
