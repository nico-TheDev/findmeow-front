import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
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
    const breakpointColumnsObj = {
        default: defaultColumns || 3,
        700: 2,
        500: 1,
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={`my-masonry-grid ${additionalClass}`}
            columnClassName="my-masonry-grid_column"
        >
            {collection.length !== 0 ? (
                collection.map((item: PetDetails) => (
                    <PetCard key={item._id} details={item} type={item.type} />
                ))
            ) : (
                <EmptyBody>
                    <EmptyImg src={emptyImg} />
                    <h2>Woah. So empty.</h2>
                </EmptyBody>
            )}
        </Masonry>
    );
};

export default PetList;
