// @ts-nocheck

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";

import PageWrapper from "components/shared/PageWrapper";
import { ProfileCard, ProfileMain, ProfilePosts, EditBtn } from "./styles";
import PetList from "components/PetList";
import { useAuth } from "contexts/AuthContext";
import usePostCollection from "hooks/usePostCollectiion";
import Spinner from "components/Spinner";

interface IProps {}

const ProfilePage: React.FC<IProps> = () => {
    const navigate = useNavigate();
    const { authState } = useAuth();
    const { user, userID } = authState;
    const [currentUser, setCurrentUser] = useState(user);
    const { collection, isLoading } = usePostCollection(`/post/user/${userID}`);

    const handleEdit = () => {
        navigate("/dashboard/edit_profile", { state: user });
    };

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    if (isLoading) return <Spinner />;

    return (
        <PageWrapper title="Profile">
            <ProfileMain>
                <ProfileCard>
                    <EditBtn onClick={handleEdit}>Edit</EditBtn>
                    <Image
                        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                        publicId={currentUser?.profileImg}
                        radius="max"
                        width="250"
                        height="250"
                    />
                    <h3>{currentUser?.name}</h3>
                    <h4>{currentUser?.location}</h4>
                    <h4>{currentUser?.email}</h4>
                    <h4>{currentUser?.contact}</h4>
                </ProfileCard>
                <ProfilePosts>
                    <h2>My Posts</h2>
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

export default ProfilePage;
