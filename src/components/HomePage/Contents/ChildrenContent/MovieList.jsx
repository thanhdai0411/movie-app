import React, { memo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useFetch from '../../../CustomHooks/useFetch';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import HoverMovie from './HoverMovie';
import Loading from '../../../Loading';

function MovieList({ url }) {
    const { data: dataTopRate, isLoading } = useFetch(url);
    let newData = dataTopRate.results;

    const customSwiper = {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 5,
        breakpoints: {
            370: {
                slidesPerView: 2,
                spaceBetween: 10,
            },

            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                // spaceBetween: 10,
            },
            1024: {
                slidesPerView: 5,
            },
        },
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
    };

    return (
        <>
            {isLoading && <Loading />}
            <div className="movie-body">
                <Swiper {...customSwiper} className="mySwiper">
                    {isLoading === false &&
                        newData &&
                        newData.length > 0 &&
                        newData.map((item, index) => (
                            <SwiperSlide key={index} className="movie-item">
                                <div className="movie-item-link">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                        alt=""
                                        // style={{ position: 'relative' }}
                                    />
                                    <HoverMovie
                                        id={item.id}
                                        title={item.title}
                                        overlay
                                        url={`movie-detail/${item.id}`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </>
    );
}

export default MovieList;
