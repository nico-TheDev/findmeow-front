// @ts-nocheck

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";

import api from "api";
import PageWrapper from "components/shared/PageWrapper";
import {
    ProfileCard,
    ProfileMain,
    ProfilePosts,
    EditBtn,
    DeleteBtn,
} from "./styles";
import Popup from "components/Popup";
import PetList from "components/PetList";
import { useAuth } from "contexts/AuthContext";
import usePostCollection from "hooks/usePostCollectiion";
import Spinner from "components/Spinner";
import useGetUser from "hooks/useGetUser";
import { Actions } from "types/ActionTypes";

interface IProps {}

const ProfilePage: React.FC<IProps> = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useAuth();
    const { userID } = authState;
    const { user: currentUser, isLoading: isUserLoaded } = useGetUser(userID);
    const { collection, isLoading } = usePostCollection(`/post/user/${userID}`);
    const [popupDetails, setPopupDetails] = useState({
        isShowing: false,
        message: "Are you sure ?",
    });

    const handleEdit = () => {
        navigate("/dashboard/edit_profile", { state: { user: currentUser } });
    };

    const handleDelete = async () => {
        try {
            await api.delete(`/user/${currentUser.id}`, {
                data: {
                    currentUser: currentUser.id,
                    publicID: currentUser.profileImg,
                },
            });
            authDispatch({ type: Actions.LOGOUT_USER });
        } catch (err) {
            console.log(err.data);
        } finally {
            navigate("/");
        }
    };

    if (isLoading || isUserLoaded) return <Spinner />;

    return (
        <PageWrapper title="Profile">
            <Popup
                isShowing={popupDetails.isShowing}
                message={popupDetails.message}
                hasButtons={true}
                noStr="Yes"
                noFunc={handleDelete}
                yesStr="No"
                yesFunc={() =>
                    setPopupDetails({
                        isShowing: false,
                        message: "Are you sure ?",
                    })
                }
            />
            <ProfileMain>
                <ProfileCard>
                    <DeleteBtn
                        onClick={() =>
                            setPopupDetails({
                                isShowing: true,
                                message: "Are you sure ?",
                            })
                        }
                    >
                        Delete
                    </DeleteBtn>
                    <EditBtn onClick={handleEdit}>Edit</EditBtn>
                    <Image
                        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                        publicId={currentUser?.profileImg}
                        radius="max"
                        width="250"
                        height="250"
                    />
                    <h3>{currentUser?.name}</h3>
                    <h4>{currentUser?.username}</h4>
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
