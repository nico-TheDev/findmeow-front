// @ts-nocheck
import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper } from "swiper/react";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/autoplay/";

interface IProps {
    children: React.ReactNode;
}

const Carousel: React.FC<IProps> = ({ children }) => {
    SwiperCore.use([Autoplay, Pagination, Navigation]);

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            className="mySwiper"
        >
            {children}
        </Swiper>
    );
};

export default Carousel;
