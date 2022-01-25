import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { useLocation } from "react-router-dom";

import PetCard from "components/PetCard";
import { PetContainer, EmptyBody, EmptyImg } from "./styles";
import api from "api";
import { PetDetails } from "types/ActionTypes";
import emptyImg from "assets/img/empty.png";
interface IProps {
    collection: PetDetails[];
    type?: string;
    additionalClass?: string;
    defaultColumns?: number;
}

const PetList: React.FC<IProps> = ({
    collection,
    type,
    additionalClass,
    defaultColumns,
}) => {
    const location = useLocation();
    const breakpointColumnsObj = {
        default: defaultColumns || 3,
        700: 2,
        500: 1,
    };

    const displayCollection = () => {
        if (collection.length !== 0) {
            if (location.pathname.includes("profile")) {
                return collection.map((item: PetDetails) => (
                    <PetCard key={item._id} details={item} type={item.type} />
                ));
            } else {
                return collection
                    .filter((item: PetDetails) => !item.isCompleted)
                    .map((item: PetDetails) => (
                        <PetCard
                            key={item._id}
                            details={item}
                            type={item.type}
                        />
                    ));
            }
        } else {
            return (
                <EmptyBody>
                    <EmptyImg src={emptyImg} />
                    <h2>Woah. So empty.</h2>
                </EmptyBody>
            );
        }
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={`my-masonry-grid ${additionalClass}`}
            columnClassName="my-masonry-grid_column"
        >
            {displayCollection()}
        </Masonry>
    );
};

export default PetList;
