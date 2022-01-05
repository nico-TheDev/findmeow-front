import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import PetCard from "components/PetCard";
import { PetContainer } from "./styles";
import api from "api";
import { PetDetails } from "types/ActionTypes";

interface IProps {
    type: string;
}

const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
};

const PetList: React.FC<IProps> = ({ type }) => {
    const [timelinePosts, setTimelinePosts] = useState([]);

    useEffect(() => {
        const getPostCollection = async () => {
            const response = await api.get(`/post/${type}/timeline`);
            setTimelinePosts(response.data.posts);
            console.log(response.data);
        };
        getPostCollection();
    }, []);

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {timelinePosts.length ? (
                timelinePosts.map((item: PetDetails) => (
                    <PetCard key={item._id} details={item} type={type} />
                ))
            ) : (
                <h2>TIMELINE SO EMPTY</h2>
            )}
        </Masonry>
    );
};

export default PetList;
