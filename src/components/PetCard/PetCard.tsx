import React from "react";
import { Link } from "react-router-dom";

import { CardMain, CardHead, CardImg, CardDesc } from "./styles";

type PetDetails = {
    id: string | number;
    profileImg: string;
    imgSource: string;
    name: string;
    location: string;
    date: string;
    description: string;
};

interface IProps {
    details: PetDetails;
}

const PetCard: React.FC<IProps> = ({ details }) => {
    return (
        <Link
            to="/dashboard/find/:id"
            style={{ textDecoration: "none", display: "block" }}
        >
            <CardHead>
                <img src={details.profileImg} alt="User Photo" />
                <div>
                    <h4>{details.name}</h4>
                    <span>{details.location}</span>
                </div>
                <span>{details.date}</span>
            </CardHead>
            <CardImg>
                <img src={details.imgSource} alt="" />
            </CardImg>
            <CardDesc>{details.description}</CardDesc>
        </Link>
    );
};

export default PetCard;
