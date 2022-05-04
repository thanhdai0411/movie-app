import React from 'react';
import { Link } from 'react-router-dom';
import requests from '../../API';
import MovieList from './ChildrenContent/MovieList';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useSelector, useDispatch } from 'react-redux';
import { getTypes } from '../../../redux/reducers/typeMovies';

function TopRate() {
    let url = requests.fetchTopRate;

    return (
        <div className="movie-type">
            <div className="movie-show-all">
                <h1>TOP RATED</h1>
               
                <Link to="movie-all/top_rated" style={{ color: 'white' }}>
                    <div className="icon-show">
                        <p>SHOW ALL</p>
                        <ArrowForwardIosIcon />
                    </div>
                </Link>
            </div>
            <MovieList url={url} />
        </div>
    );
}

export default TopRate;
