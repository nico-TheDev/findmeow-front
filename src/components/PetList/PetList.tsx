import React from "react";
import Masonry from "react-masonry-css";
import PetCard from "components/PetCard";
import { PetContainer } from "./styles";

interface IProps {}

const sample = [
    {
        id: 0,
        profileImg: "https://randomuser.me/api/portraits/men/14.jpg",
        imgSource:
            "https://media.istockphoto.com/photos/furry-dog-smiling-with-tongue-out-picture-id1287452200?b=1&k=20&m=1287452200&s=170667a&w=0&h=1XDHJ1DNyzoZ1fellkNKHhmmORqx2Oqt-PSSFJ4eS50=",
        name: "Clark Kent",
        location: "Pasig City",
        date: "12/21/2021",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis doloribus illum reprehenderit dolorem! Velit praesentium dolor quasi esse officia vitae.",
    },
    {
        id: 1,
        profileImg: "https://randomuser.me/api/portraits/men/11.jpg",
        imgSource:
            "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Saddy Kent",
        location: "Pasig City",
        date: "12/21/2021",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, expedita.",
    },
    {
        id: 2,
        profileImg: "https://randomuser.me/api/portraits/men/15.jpg",
        imgSource:
            "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Kelly Wrestler",
        location: "Pasig City",
        date: "12/21/2021",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident culpa consequatur explicabo iste est fugit?",
    },
    {
        id: 0,
        profileImg: "https://randomuser.me/api/portraits/men/14.jpg",
        imgSource:
            "https://media.istockphoto.com/photos/furry-dog-smiling-with-tongue-out-picture-id1287452200?b=1&k=20&m=1287452200&s=170667a&w=0&h=1XDHJ1DNyzoZ1fellkNKHhmmORqx2Oqt-PSSFJ4eS50=",
        name: "Clark Kent",
        location: "Pasig City",
        date: "12/21/2021",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis doloribus illum reprehenderit dolorem! Velit praesentium dolor quasi esse officia vitae.",
    },
    {
        id: 1,
        profileImg: "https://randomuser.me/api/portraits/men/11.jpg",
        imgSource:
            "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Saddy Kent",
        location: "Pasig City",
        date: "12/21/2021",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, expedita.",
    },
    {
        id: 2,
        profileImg: "https://randomuser.me/api/portraits/men/15.jpg",
        imgSource:
            "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Kelly Wrestler",
        location: "Pasig City",
        date: "12/21/2021",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident culpa consequatur explicabo iste est fugit?",
    },
];

const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
};

const PetList: React.FC<IProps> = () => {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {sample.map((item) => (
                <PetCard key={item.id} details={item} />
            ))}
        </Masonry>
    );
};

export default PetList;
