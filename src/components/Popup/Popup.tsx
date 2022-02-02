//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    PopupCard,
    ButtonHolder,
    MessageBody,
    MessageHead,
    NoBtn,
    YesBtn,
    PopupMain,
} from "./styles";

interface IProps {
    hasButtons?: boolean;
    message?: string;
    yesFunc?: () => void;
    noFunc?: () => void;
    yesStr?: string;
    noStr?: string;
    isShowing: boolean;
}

const Popup: React.FC<IProps> = ({
    hasButtons,
    message,
    yesFunc,
    noFunc,
    yesStr,
    noStr,
    isShowing,
}) => {
    const handleYes = () => {
        yesFunc();
    };
    const handleNo = () => {
        noFunc();
    };

    return (
        <PopupMain isShowing={isShowing}>
            <PopupCard>
                <MessageHead>MESSAGE</MessageHead>
                <MessageBody>{message}</MessageBody>
                {hasButtons && (
                    <ButtonHolder>
                        <YesBtn onClick={handleYes}>{yesStr}</YesBtn>
                        <NoBtn onClick={handleNo}>{noStr}</NoBtn>
                    </ButtonHolder>
                )}
            </PopupCard>
        </PopupMain>
    );
};

export default Popup;
