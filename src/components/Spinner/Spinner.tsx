import React from "react";
import loader from "assets/img/loader.png";
import { LoaderMain, LoaderImg } from "./styles";

interface IProps {}

const Spinner: React.FC<IProps> = () => {
    return (
        <LoaderMain>
            <LoaderImg src={loader} />
        </LoaderMain>
    );
};

export default Spinner;
