//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAuth } from "contexts/AuthContext";
import { PetDetails } from "types/ActionTypes";
import { CardMain, CardHead, CardImg, CardDesc, CardType } from "./styles";
import formatDate from "util/formatDate";
import api from "api";
import truncateString from "util/formatDesc";

interface IProps {
    details: PetDetails;
    type: string;
}

const PetCard: React.FC<IProps> = ({ details, type }) => {
    const { pathname } = useLocation();
    const { authState } = useAuth();
    const { user } = authState;
    const [postOwnerSrc, setPostOwnerSrc] = useState("");
    const [postImgSrc, setPostImgSrc] = useState("");

    useEffect(() => {
        setPostImgSrc(`${process.env.REACT_APP_IMG_PATH}${details.image}`);

        const getPostOwner = async () => {
            const response = await api.get(`/user/${details.userId}`);
            const postOwner = response.data.user;
            setPostOwnerSrc(
                `${process.env.REACT_APP_IMG_PATH}${postOwner?.profileImg}`
            );
        };

        getPostOwner();
    }, []);

    const getType = (type: string) => {
        if (type === "adoption") return "adopt";
        if (type === "missing") return "find";
    };

    return (
        <Link
            to={`/dashboard/${getType(type)}/${details._id}`}
            style={{ textDecoration: "none", display: "block" }}
        >
            {pathname.includes("home") && (
                <CardType type={type}>{type.toUpperCase()}</CardType>
            )}{" "}
            <CardHead>
                <img src={postOwnerSrc} alt={`${details.name} photo`} />
                <div>
                    <h4>{details.name}</h4>
                    <span>{truncateString(details.location, 15)}</span>
                </div>
                <span>{formatDate(details.createdAt)}</span>
            </CardHead>
            <CardImg>
                <img src={postImgSrc} alt="Post Photo" />
            </CardImg>
            <CardDesc>{truncateString(details.description, 100)}</CardDesc>
        </Link>
    );
};

export default PetCard;
