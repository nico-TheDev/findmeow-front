// @ts-nocheck

import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";

import PageWrapper from "components/shared/PageWrapper";
import { ProfileCard, ProfileMain, ProfilePosts, PostList } from "./styles";
import PetList from "components/PetList";
import { useAuth } from "contexts/AuthContext";

import usePostCollection from "hooks/usePostCollectiion";
import Spinner from "components/Spinner";
import { useLocation, useParams } from "react-router-dom";

interface IProps {}

const OtherProfilePage: React.FC<IProps> = () => {
    const { authState } = useAuth();
    const { id } = useParams();
    const location = useLocation();
    const { post, user } = location.state;

    const { collection, isLoading } = usePostCollection(`/post/user/${id}`);

    if (isLoading) return <Spinner />;

    return (
        <PageWrapper title="Profile">
            <ProfileMain>
                <ProfileCard>
                    <Image
                        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                        publicId={user?.profileImg}
                        radius="max"
                        width="250"
                        height="250"
                    />
                    <h3>{user?.name}</h3>
                    <h4>{user?.location}</h4>
                    <h4>{user?.email}</h4>
                    <h4>{user?.contact}</h4>
                </ProfileCard>
                <ProfilePosts>
                    <h2>{user?.name} Posts</h2>
                    <PetList
                        collection={collection}
                        additionalClass="fullWidth"
                        defaultColumns={2}
                    />
                </ProfilePosts>
            </ProfileMain>
        </PageWrapper>
    );
};

export default OtherProfilePage;
