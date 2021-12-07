import React from "react";

import Icon from "components/shared/Icon";
import {
    CardBody,
    CardDesc,
    CardImg,
    CardLink,
    CardTitle,
    CardButton,
} from "./styles";

interface IProps {
    img: string;
    description: string;
    title: string;
    path: string;
    pathName: string;
}

const Card: React.FC<IProps> = ({
    img,
    description,
    path,
    title,
    pathName,
}) => {
    return (
        <CardBody>
            <CardImg src={img} alt="" />
            <CardTitle>{title}</CardTitle>
            <CardDesc>{description}</CardDesc>
            <CardLink to={path}>{pathName}</CardLink>
            <CardButton>
                <Icon name="add" />
                Create
            </CardButton>
        </CardBody>
    );
};

export default Card;
