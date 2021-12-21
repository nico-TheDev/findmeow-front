import { Container, PageBG } from "components/shared/shared";
import React from "react";

interface IProps {
    children: React.ReactNode;
    title?: String;
    imgSrc?: string;
}

const PageWrapper: React.FC<IProps> = ({ children, title, imgSrc }) => {
    return (
        <Container>
            {imgSrc && <PageBG src={imgSrc} alt="" />}
            {title && <h1>{title}</h1>} {children}
        </Container>
    );
};

export default PageWrapper;
