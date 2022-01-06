import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

import PageWrapper from "components/shared/PageWrapper";
import { ProfileCard, ProfileMain, ProfilePosts, PostList } from "./styles";
import PetCard from "components/PetCard";
import { useAuth } from "contexts/AuthContext";
import api from "api";
import { PetDetails } from "types/ActionTypes";

interface IProps {}

const ProfilePage: React.FC<IProps> = () => {
    const { authState } = useAuth();
    const [postCollection, setPostCollection] = useState([]);
    const { user, userID } = authState;
    const profileImgSrc = `${process.env.REACT_APP_IMG_PATH}${user?.profileImg}`;

    useEffect(() => {
        const getPostCollection = async () => {
            const response = await api.get(`/post/user/${userID}`);
            console.log(response.data);
            setPostCollection(response.data.posts);
        };
        getPostCollection();
    }, []);
    return (
        <PageWrapper title="Profile">
            <ProfileMain>
                <ProfileCard>
                    <img src={profileImgSrc} alt={user?.name + "photo"} />
                    <h3>{user?.name}</h3>
                    <h4>{user?.location}</h4>
                    <h4>{user?.email}</h4>
                    <h4>{user?.contact}</h4>
                </ProfileCard>
                <ProfilePosts>
                    <h2>My Posts</h2>
                    <PostList>
                        <Masonry
                            breakpointCols={2}
                            className="my-masonry-grid custom-masonry"
                            columnClassName="my-masonry-grid_column custom-column"
                        >
                            {postCollection.length ? (
                                postCollection.map((item: PetDetails) => (
                                    <PetCard
                                        key={item._id}
                                        details={item}
                                        type="Missing"
                                    />
                                ))
                            ) : (
                                <h2>No Posts</h2>
                            )}
                        </Masonry>
                    </PostList>
                </ProfilePosts>
            </ProfileMain>
        </PageWrapper>
    );
};

export default ProfilePage;
