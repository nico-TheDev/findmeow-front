import { Container } from "components/shared/shared";
import React from "react";

interface IProps {
    children: React.ReactNode;
    title: String;
}

const PageWrapper: React.FC<IProps> = ({ children, title }) => {
    return (
        <Container>
            <h1>{title}</h1>
            {children}
        </Container>
    );
};

export default PageWrapper;
