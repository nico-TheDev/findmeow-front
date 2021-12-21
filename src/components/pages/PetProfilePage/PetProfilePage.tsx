import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageWrapper from "components/shared/PageWrapper";
import {
    PetMain,
    PetBottom,
    PetLeft,
    PetLocation,
    PetRight,
    PetBtn,
} from "./styles";

interface IProps {}

const PetProfilePage: React.FC<IProps> = () => {
    const { id } = useParams();
    const [petDetails, setPetDetails] = useState();

    useEffect(() => {
        // FIND PET IN DB
        // ASSIGN PET TO DETAILS
        // DISPLAY IT
    }, [id]);

    return (
        <PageWrapper title="Pet Profile">
            <PetMain>
                <PetLeft>
                    <img
                        src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <PetBottom>
                        <img
                            src="https://randomuser.me/api/portraits/men/54.jpg"
                            alt=""
                        />
                        <h4>Owner Name</h4>
                    </PetBottom>
                </PetLeft>
                <PetRight>
                    <h4>Bruno</h4>
                    <PetLocation>
                        <h6>Manila</h6>
                        <h6>12/11/2021</h6>
                    </PetLocation>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis quidem ullam quo sapiente facilis atque amet ab
                        impedit id quae.
                    </p>

                    <PetBtn>Contact Owner</PetBtn>
                </PetRight>
            </PetMain>
        </PageWrapper>
    );
};

export default PetProfilePage;
