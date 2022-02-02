// @ts-nocheck
import styled from "styled-components";
import { Button } from "components/shared/shared";
import respondTo from "util/respondTo";

export const MainContainer = styled.div`
    background: #fff8f8;
    position: relative;
`;

export const Header = styled.header`
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const MainContent = styled(Container)`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    position: relative;
    z-index: 2;

    ${respondTo.md`
     grid-template-columns: 1fr;
`}
`;

export const Left = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
    justify-items: center;
    align-content: center;

    ${respondTo.cp`
      h2{
        font-size:1rem;
          text-align:center;      }
     
`}

    h2 {
        font-size: 2rem;
        font-weight: 300;
    }

    span a {
        color: blue;
        text-align: center;
    }
`;

export const Right = styled.div`
    ${respondTo.md`
        display:none;    
`}
    img {
        width: 400px;
        height: 400px;
        display: block;
    }
`;

export const SignupBtn = styled(Button)`
    font-size: 1.5rem;
    padding: 0.5em;
    margin: 0;
    width: 80%;
    margin-top: 2rem;
`;

export const Logo = styled.img`
    width: 350px;
    display: block;

    ${respondTo.cp`
        width:250px;
`}
`;

export const Wave = styled.div`
    svg {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 80%;
    }
`;

export const WaveOneHolder = styled(Wave)`
    svg {
        position: absolute;
        bottom: -20%;
        left: 0;
        width: 100%;
        z-index: 1;
    }
`;

export const WaveTwoHolder = styled(Wave)`
    svg {
        position: absolute;
        top: -20%;
        left: 0;
        width: 100%;
        z-index: 1;
        transform: rotate(180deg);
    }
`;
export const WaveThreeHolder = styled(Wave)`
    svg {
        position: absolute;
        bottom: -20%;
        left: 0;
        width: 100%;
        z-index: 1;
    }
`;

export const FeatureSection = styled.section`
    padding: 8rem 0;
    padding-top: 10rem;
    position: relative;
`;

export const FeatureContainer = styled(Container)``;

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
`;

const Feature = styled.div`
    position: relative;
    z-index: 10;
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    cursor: drag;

    ${respondTo.md`
        
        flex-direction:column;
        img{
            margin-bottom:2rem;
        }
    `}

    ${respondTo.cp`
        width:90%;

        img{
            width:250px;
            height:300px;
        }

        h3{
            font-size:2rem;
        }

        h3,p{
            text-align:center;
        }
    `}

    img {
        width: 300px;
        height: 400px;
    }

    h3 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.5rem;
    }
`;

export const FeatureOne = styled(Feature)`
    position: relative;
    z-index: 10;
    img {
        width: 450px;
    }

    ${respondTo.cp`

img{
    width:200px;
    height:250px;
}
`}
`;
export const FeatureTwo = styled(Feature)``;
export const FeatureThree = styled(Feature)``;

export const ContactSection = styled(FeatureSection)``;

export const ContactSub = styled.h3`
    text-align: center;
    font-size: 2rem;
    span {
        padding-top: 1rem;
        display: block;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.primary.main};
    }
`;
export const ContactEmail = styled.h4``;
