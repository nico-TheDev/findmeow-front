import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "contexts/AuthContext";
import { PetDetails } from "types/ActionTypes";
import { CardMain, CardHead, CardImg, CardDesc } from "./styles";
import formatDate from "util/formatDate";
import api from "api";

interface IProps {
    details: PetDetails;
    type: string;
}

const PetCard: React.FC<IProps> = ({ details, type }) => {
    const { authState } = useAuth();
    const { user } = authState;
    const [postOwnerSrc, setPostOwnerSrc] = useState("");
    const [postImgSrc, setPostImgSrc] = useState("");

    useEffect(() => {
        setPostImgSrc(`${process.env.REACT_APP_IMG_PATH}${details.image}`);

        const getPostOwner = async () => {
            const response = await api.get(`/user/${details.userId}`);
            const postOwner = response.data.user;
            console.log(response.data);
            setPostOwnerSrc(
                `${process.env.REACT_APP_IMG_PATH}${postOwner?.profileImg}`
            );
        };

        getPostOwner();
    }, []);

    return (
        <Link
            to={`/dashboard/${type}/${details._id}`}
            style={{ textDecoration: "none", display: "block" }}
        >
            <CardHead>
                <img src={postOwnerSrc} alt={`${details.name} photo`} />
                <div>
                    <h4>{details.name}</h4>
                    <span>{details.location}</span>
                </div>
                <span>{formatDate(details.createdAt)}</span>
            </CardHead>
            <CardImg>
                <img src={postImgSrc} alt="Post Photo" />
            </CardImg>
            <CardDesc>{details.description}</CardDesc>
        </Link>
    );
};

export default PetCard;
