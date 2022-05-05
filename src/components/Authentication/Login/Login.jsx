import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { auth, provider, providerFb } from '../../../firebase';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
} from 'firebase/auth';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPass, setLoginPass] = useState('');
    // const [user, setUser] = useState({});

    const navigate = useNavigate();

    const login = () => {
        signInWithEmailAndPassword(auth, loginEmail, loginPass)
            .then((result) => {
                const author = result.user;
                localStorage.setItem('loginUserName', author.displayName);
                navigate('/home');
            })
            .catch(() => {
                alert('Dang nhap khong thanh cong');
            });
    };

    const signInWithGG = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const name = user.displayName;
                const imgUser = user.photoURL;
                localStorage.setItem('name', name);
                localStorage.setItem('imgUser', imgUser);
                navigate('/home');
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="login-form">
            <div className="container">
                <div className="wrap-box">
                    <h1>LOGIN FORM </h1>
                    <div className="write_info">
                        <input
                            value={loginEmail}
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        <input
                            value={loginPass}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setLoginPass(e.target.value)}
                        />
                    </div>
                    {/* <h3 className="forgot-pass">Forgot Password ?</h3> */}
                    <button className="btn-login" onClick={login}>
                        LOGIN
                    </button>

                    <h3>Or Login With</h3>
                    <div className="btn-group-login">
                        <button onClick={signInWithGG} className="btn-gg">
                            {' '}
                            <GoogleIcon className="icon-gg" /> Google
                        </button>
                        {/* <button onClick={signInWithFb} className="btn-fb">
                            {' '}
                            <FacebookIcon className="icon-fb" /> Facebook
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
