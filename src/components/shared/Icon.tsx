import React from "react";
import dir from "assets/icons/icon-list.svg";

interface IProps {
    name: string;
}

const Icon: React.FC<IProps> = ({ name }) => {
    return (
        <svg>
            <use href={`${dir}#icon-${name}`} />
        </svg>
    );
};

export default Icon;
