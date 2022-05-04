import React, { useState } from 'react';
import './Register.scss';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { auth } from '../../../firebase';

function Register() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPass, setRegisterPass] = useState('');

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPass
            );
            console.log(user);
        } catch (err) {
            console.log(err.message);
            alert(err.message);
        }
    };

    

    return (
        <div className="login-form">
            <div className="container">
                <div className="wrap-box">
                    <h1>REGISTER</h1>
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
                    <button  className="btn-login">
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
