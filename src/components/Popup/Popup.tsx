import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    PopupCard,
    ButtonHolder,
    MessageBody,
    MessageHead,
    NoBtn,
    YesBtn,
} from "./styles";

interface IProps {
    hasButtons?: boolean;
    message?: string;
    closeModal: () => void;
}

const Popup: React.FC<IProps> = ({ hasButtons, message, closeModal }) => {
    return (
        <PopupCard>
            <MessageHead>MESSAGE</MessageHead>
            <MessageBody>{message}</MessageBody>
            {hasButtons && (
                <ButtonHolder>
                    <YesBtn onClick={() => closeModal()}>YES</YesBtn>
                    <NoBtn>NO</NoBtn>
                </ButtonHolder>
            )}
        </PopupCard>
    );
};

export default Popup;
