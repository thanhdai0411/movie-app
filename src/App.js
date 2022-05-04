import { Routes, Route } from 'react-router-dom';
import {memo} from 'react'
import './App.css';
import 'swiper/css/bundle';
import Header from './components/Header/Header';
import BodyLogin from './components/BodyLogin/BodyLogin';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import Home from './components/HomePage/Home';
import DetailMovieMain from './components/HomePage/Contents/Detail/DetailMovieMain';
import ShowAllMovie from './components/HomePage/Contents/Detail/ShowAllMovie';
// import PlayMovie from './components/HomePage/PlayMovie'

function App() {
    return (
        <div className="app">
            <Header />

            <Routes>
                <Route path="/" element={<BodyLogin />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="home" element={<Home />} />
                <Route path="home/movie-detail/:id" element={<DetailMovieMain />} />
                <Route path="home/movie-all/:type" element={<ShowAllMovie />} />
                <Route
                    path="home/movie-all/:type/:id"
                    element={<DetailMovieMain />}
                />
            </Routes>
        </div>
    );
}

export default (App);
