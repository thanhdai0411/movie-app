import React, { useState } from 'react';
// import './Register.scss';
import { useNavigate } from 'react-router-dom';

import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from 'firebase/auth';
import { auth } from '../../../firebase';
function Register() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPass, setRegisterPass] = useState('');
    const [nameUser, setNameUser] = useState('');
    const navigate = useNavigate();

    const register = () => {
        createUserWithEmailAndPassword(auth, registerEmail, registerPass)
            .then((result) => {
                updateProfile(auth.currentUser, {
                    displayName: nameUser,
                }).then(() => {
                    alert('Đăng ký thành công !!!');
                    navigate('/login');
                });
            })
            .catch((e) => {
                alert(e.message);
            });
    };

    return (
        <div className="login-form">
            <div className="container">
                <div className="wrap-box">
                    <h1>REGISTER FORM</h1>
                    <div className="write_info">
                        <input
                            value={nameUser}
                            type="text"
                            placeholder="Your name"
                            onChange={(e) => setNameUser(e.target.value)}
                        />
                        <input
                            value={registerEmail}
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                        <input
                            value={registerPass}
                            type="text"
                            placeholder="Password"
                            onChange={(e) => setRegisterPass(e.target.value)}
                        />
                    </div>

                    <button className="btn-login" onClick={register}>
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
