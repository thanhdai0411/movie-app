import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import SwiperCore, { Pagination, Navigation,Autoplay } from 'swiper';

function SwiperHome() {
    SwiperCore.use([Pagination, Navigation,Autoplay]);
    return (
        <div className="slider">
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                className="mySwiperBrand"
            >
                <SwiperSlide>
                    <img className="img-slider" src="/images/slider-badag.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="img-slider" src="/images/slider-badging.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="img-slider" src="/images/slider-scale.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="img-slider" src="/images/slider-scales.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperHome;
