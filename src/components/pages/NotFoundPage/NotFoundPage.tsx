import React from "react";

import PageWrapper from "components/shared/PageWrapper";
import {
    NotFoundMain,
    NotFoundPhoto,
    NotFoundTitle,
    NotFoundDesc,
} from "./styles";
import notFoundPic from "assets/img/notfound.png";

interface IProps {}

const NotFoundPage: React.FC<IProps> = () => {
    return (
        <PageWrapper title="">
            <NotFoundMain>
                <NotFoundPhoto src={notFoundPic} alt="404 Page Photo" />
                <NotFoundTitle>Oops!</NotFoundTitle>
                <NotFoundDesc>
                    Looks like FindMEow had an error.{" "}
                    <span>Try reloading the page!</span>
                </NotFoundDesc>
            </NotFoundMain>
        </PageWrapper>
    );
};

export default NotFoundPage;
