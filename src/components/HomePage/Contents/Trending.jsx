import React from 'react'

import requests from '../../API';
import MovieList from './ChildrenContent/MovieList';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from 'react-router-dom'


function Trending() {

    let url = requests.fetchPopular
    return (
        <div className="movie-type">
            <div className="movie-show-all">
                <h1>TRENDING NOW</h1>
                <Link to="movie-all/popular" style={{ color: 'white' }} >
                    <div className="icon-show">
                        <p>SHOW ALL</p>
                        <ArrowForwardIosIcon />
                    </div>
                </Link>
            </div>
            <MovieList url={url} />
        </div>
    )
}

export default Trending
