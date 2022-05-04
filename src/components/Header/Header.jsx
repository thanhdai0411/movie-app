import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.scss';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { auth } from '../../firebase';

import { signOut } from 'firebase/auth';

function Header() {
    const name = localStorage.getItem('name');
    const imgUser = localStorage.getItem('imgUser');
    const navigate = useNavigate();

    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign Out successfully !!!');
                localStorage.setItem('name', '');
                localStorage.setItem('imgUser', '');
                navigate('/');
            })
            .catch((error) => {
                // An error happened.
            });
    };

    return (
        <div className="header">
            <div className="header__logo">
                <img src="/images/logo.svg" alt="" width="80px" />
            </div>
            {name && imgUser ? (
                <ul className="header__nav">
                    <Link to="home">
                        <HomeIcon className="icon-nav" />
                        HOME
                    </Link>
                    <Link to="search">
                        <SearchIcon className="icon-nav" />
                        SEARCH
                    </Link>
                    <Link to="watchlist">
                        <AddIcon className="icon-nav" />
                        WATCHLIST
                    </Link>
                    <Link to="originals">
                        <StarIcon className="icon-nav" />
                        ORIGINALS
                    </Link>
                    <Link to="movies">
                        <LocalMoviesIcon className="icon-nav" />
                        MOVIES
                    </Link>
                    <Link to="series">
                        <img
                            src="/images/series-icon.svg"
                            alt=""
                            width="24px"
                            className="icon-nav"
                        />
                        SERIES
                    </Link>
                </ul>
            ) : (
                ''
            )}

            <div className="header__user">
                {name && imgUser ? (
                    <>
                        <img
                            src={imgUser && imgUser}
                            alt=""
                            width={40}
                            height={40}
                            className="avatar"
                        />
                        <span className="name-user">{name}</span>
                        <button className="btn-sign-out" onClick={logOut}>
                            SIGN OUT
                        </button>
                    </>
                ) : (
                    <>
                        <div className="header__login">
                            <Link to="login">
                                <button className="btn-login">LOGIN</button>
                            </Link>
                        </div>
                        {/* <div className="header__register">
                            <Link to="register">
                                <button className="btn-register">REGISTER</button>
                            </Link>
                        </div> */}
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
