import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import PetCard from "components/PetCard";
import { PetContainer } from "./styles";
import api from "api";
import { PetDetails } from "types/ActionTypes";

interface IProps {
    collection: PetDetails[];
    type: string;
}

const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
};

const PetList: React.FC<IProps> = ({ collection, type }) => {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {collection.map((item: PetDetails) => (
                <PetCard key={item._id} details={item} type={type} />
            ))}
        </Masonry>
    );
};

export default PetList;
