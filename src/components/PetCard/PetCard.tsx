import { useAuth } from "contexts/AuthContext";
import React from "react";
import { Link } from "react-router-dom";

import { CardMain, CardHead, CardImg, CardDesc } from "./styles";
import { PetDetails } from "types/ActionTypes";

interface IProps {
    details: PetDetails;
    type: string;
}

const PetCard: React.FC<IProps> = ({ details, type }) => {
    const { authState } = useAuth();
    const { user } = authState;
    const imgSrc = `${process.env.REACT_APP_SERVER_HOST}${process.env.REACT_APP_IMG_PATH}`;

    return (
        <Link
            to={`/dashboard/${type}/${details._id}`}
            style={{ textDecoration: "none", display: "block" }}
        >
            <CardHead>
                <img
                    src={imgSrc + user?.profileImg}
                    alt={`${details.name} photo`}
                />
                <div>
                    <h4>{details.name}</h4>
                    <span>{details.location}</span>
                </div>
                <span>{details.date}</span>
            </CardHead>
            <CardImg>
                <img src={imgSrc + details.image} alt="" />
            </CardImg>
            <CardDesc>{details.description}</CardDesc>
        </Link>
    );
};

export default PetCard;
