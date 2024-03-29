// @ts-nocheck
import { css } from "styled-components";
const breakpoints: {
    cp: string;
    sm: string;
    md: string;
    lg: string;
} = {
    cp: "450px",
    sm: "640px",
    md: "800px",
    lg: "1200px",
};
const respondTo = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${breakpoints[label]}) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});
export default respondTo;
