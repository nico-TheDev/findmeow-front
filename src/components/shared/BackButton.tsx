import React from "react";
import { BackBtn } from "components/shared/shared";
import Icon from "components/shared/Icon";
import { useNavigate } from "react-router-dom";

interface IProps {
    path: string;
    type?: string;
}

const BackButton: React.FC<IProps> = ({ path, type }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };
    return (
        <BackBtn onClick={handleClick}>
            <Icon name="arrow_back" />
        </BackBtn>
    );
};

export default BackButton;
