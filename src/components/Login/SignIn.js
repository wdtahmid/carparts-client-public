import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../hookes/firebase.init';
import Register from '../Register/Register';
import Login from './Login';

const SignIn = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    let location = useLocation();

    let from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen" >
                <div className="modal-box relative">
                    {toggle ? <Register /> : <Login />}
                    <button className='text-center w-full text-success' onClick={() => setToggle(!toggle)}>{toggle ? 'Have an account? Login' : "Don't have an account? Register"}</button>
                </div>
            </div >
        </>

    );
};

export default SignIn;