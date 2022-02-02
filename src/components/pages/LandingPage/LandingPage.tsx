import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

import Carousel from "components/Carousel";
import {
    Header,
    MainContent,
    SignupBtn,
    Left,
    Right,
    Logo,
    WaveOneHolder,
    FeatureContainer,
    FeatureSection,
    SectionTitle,
    WaveTwoHolder,
    WaveThreeHolder,
    FeatureOne,
    FeatureTwo,
    FeatureThree,
    MainContainer,
    ContactSection,
    ContactSub,
    ContactEmail,
} from "./styles";
import logo from "assets/img/findmeow-logo-3.png";
import landingImg from "assets/img/landing-img-2.png";
import featureOne from "assets/img/feature-1.png";
import featureTwo from "assets/img/feature-2.png";
import featureThree from "assets/img/feature-3.png";
import { useAuth } from "contexts/AuthContext";

interface IProps {}

const LandingPage: React.FC<IProps> = () => {
    const { authState } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/signup");
    };

    useEffect(() => {
        if (authState.token) {
            navigate("/dashboard/home");
        }
    }, []);

    return (
        <MainContainer>
            <Header>
                <MainContent>
                    <Left>
                        <Logo src={logo} alt="findmeow logo" />
                        <h2>A place you can use to help find your pet</h2>
                        <SignupBtn onClick={handleClick}>SIGN UP</SignupBtn>
                        <span>
                            Already have an account ?{" "}
                            <Link to="/login">Login Here</Link>
                        </span>
                    </Left>

                    <Right>
                        <img src={landingImg} alt="" />
                    </Right>
                </MainContent>

                <WaveOneHolder>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#FFCDD2"
                            fill-opacity="1"
                            d="M0,0L80,32C160,64,320,128,480,165.3C640,203,800,213,960,197.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                    </svg>
                </WaveOneHolder>
            </Header>

            <FeatureSection>
                <WaveTwoHolder>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#FFCDD2"
                            fill-opacity="1"
                            d="M0,0L80,32C160,64,320,128,480,165.3C640,203,800,213,960,197.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                    </svg>
                </WaveTwoHolder>
                <SectionTitle>What We Offer</SectionTitle>
                <FeatureContainer>
                    <Carousel>
                        <SwiperSlide>
                            <FeatureOne>
                                <img src={featureOne} alt="" />
                                <div>
                                    <h3>
                                        See Who's Missing and up for adoption
                                    </h3>
                                    <p>
                                        Newsfeed tailored specifically to only
                                        post missing pets and pets up for
                                        adoptions
                                    </p>
                                </div>
                            </FeatureOne>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureTwo>
                                <img src={featureTwo} alt="" />
                                <div>
                                    <h3>
                                        Set up your own posts and post them on
                                        the feed
                                    </h3>
                                    <p>
                                        Start your digital call for help by
                                        posting your missing pet now
                                    </p>
                                </div>
                            </FeatureTwo>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureThree>
                                <img src={featureThree} alt="" />
                                <div>
                                    <h3>
                                        See other users and their posts to
                                        contact them
                                    </h3>
                                    <p>
                                        You can contact other users if you want
                                        to adopt their pet or tell them you
                                        found their missing buddy
                                    </p>
                                </div>
                            </FeatureThree>
                        </SwiperSlide>
                    </Carousel>

                    <WaveThreeHolder>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill="#FFCDD2"
                                fill-opacity="1"
                                d="M0,0L80,32C160,64,320,128,480,165.3C640,203,800,213,960,197.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                            ></path>
                        </svg>
                    </WaveThreeHolder>
                </FeatureContainer>
            </FeatureSection>

            <ContactSection>
                <WaveTwoHolder>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#FFCDD2"
                            fill-opacity="1"
                            d="M0,0L80,32C160,64,320,128,480,165.3C640,203,800,213,960,197.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                    </svg>
                </WaveTwoHolder>
                <SectionTitle>Have More Questions?</SectionTitle>
                <ContactSub>
                    Ask Us Through
                    <span>findmeowsupport@gmail.com</span>
                </ContactSub>
            </ContactSection>
        </MainContainer>
    );
};

export default LandingPage;
