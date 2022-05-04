import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useFetch from '../../../CustomHooks/useFetch';
import requests from '../../../API';

function DetailMovie({ id, handleToggleVideo }) {
    const navigate = useNavigate();


    const handleBack = () => {
        navigate(-1);
    };

    const urlFetchDetail = requests.fetDetailMovie(id);
    const { data: movieDetail, isLoading } = useFetch(urlFetchDetail);
    let genres = movieDetail.genres;



    return (
        <>
            {/* {isLoading === false && <Loading />} */}
            {isLoading === false && (
                <>
                    <button className="btn-back " onClick={handleBack}>
                        BACK
                    </button>
                    <img
                        className="detail__bgc"
                        src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
                        alt=""
                    />
                    <img
                        className="detail__poster"
                        src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                        alt=""
                    />
                    <div className="detail__content">
                        <h1>{movieDetail.title}</h1>
                        <p>{movieDetail.overview}</p>

                        <div className="info-movie">
                            <h2>Info on {movieDetail.title}</h2>
                            <p>
                                Genres:{' '}
                                {genres !== undefined &&
                                    genres.map((item) => item.name).join(', ')}
                            </p>
                            <p>Release Data: {movieDetail.release_date}</p>
                            <p>Average Vote: {movieDetail.vote_average}</p>
                        </div>
                        <div className="detail__btn-group">
                            <button className="play">
                                <img src="/images/play-icon-white.png" alt="" />
                                PLAY
                            </button>
                            <button className="trainer" onClick={handleToggleVideo}>
                                <img src="/images/play-icon-white.png" alt="" />
                                TRAINER
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default DetailMovie;
