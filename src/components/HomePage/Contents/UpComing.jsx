import React from 'react';

import requests from '../../API';
import MovieList from './ChildrenContent/MovieList';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from 'react-router-dom'


function UpComing() {
    let url = requests.fetchUpComing;

    
        return (
        <div className="movie-type">
            <div className="movie-show-all">
                <h1>UP COMING</h1>
                <Link to="movie-all/upcoming" style={{ color: 'white' }} >
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

export default UpComing;
