import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function HoverMovie({ id, title, overlay, marginLeft, url, top }) {
    const style ={
        left : '4rem' , 
        top : '42%', 
    }
    return (
        <div
            className="hover-movie-item"
            // style={marginLeft && top && { left: '3rem', top: '42%' }}
        >
            {overlay && <div className="overlay"></div>}
            <div className="btn-group">
                <button className="btn-play">
                    {' '}
                    <PlayArrowIcon
                        style={{
                            color: 'white',
                            fontSize: '25px',
                        }}
                    />{' '}
                    PLAY
                </button>
                <Link to={url}>
                    <InfoOutlinedIcon
                        style={{ color: 'white', fontSize: '45px', zIndex: '1' }}
                    />
                </Link>
            </div>
            <h3>{title}</h3>
        </div>
    );
}

export default HoverMovie;
