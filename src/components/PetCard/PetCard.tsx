//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Image, Placeholder } from "cloudinary-react";

import { useAuth } from "contexts/AuthContext";
import { PetDetails } from "types/ActionTypes";
import { CardLoader, CardHead, CardImg, CardDesc, CardType } from "./styles";
import formatDate from "util/formatDate";
import api from "api";
import truncateString from "util/formatDesc";
import usePostOwner from "hooks/usePostOwner";

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

    const { owner, isLoading } = usePostOwner(details.userId);

    const getType = (type: string) => {
        if (type === "adoption") return "adopt";
        if (type === "missing") return "find";
        else {
            return type;
        }
    };

    const displayHead = () => {
        const isInProfileAndCompleted =
            details.isCompleted && pathname.includes("profile");

        if (pathname.includes("home")) {
            return <CardType type={type}>{type.toUpperCase()}</CardType>;
        }
        if (isInProfileAndCompleted) {
            return <CardType type="missing">COMPLETED</CardType>;
        }
    };

    if (isLoading) return <CardLoader />;

    return (
        <Link
            to={`/dashboard/${getType(type)}/${details._id}`}
            style={{ textDecoration: "none", display: "block" }}
        >
            {displayHead()}
            <CardHead>
                <Image
                    cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                    publicId={owner?.profileImg}
                    radius="max"
                    width="40"
                    height="40"
                />

                <div>
                    <h4>{details.name}</h4>
                    <span>{truncateString(details.location, 15)}</span>
                </div>
                <span>{formatDate(details.createdAt)}</span>
            </CardHead>
            <CardImg>
                <Image
                    cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                    publicId={details.image}
                    width="300"
                    height="300"
                    crop="scale"
                >
                    <Placeholder type="pixelated" />
                </Image>
            </CardImg>
            <CardDesc>{truncateString(details.description, 100)}</CardDesc>
        </Link>
    );
};

export default PetCard;
