import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FormModel from '../../FormModel/FormModel';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../hookes/firebase.init';
import Logo from '../../../assets/images/carpartslogo.png';


const Header = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    }

    const navigation = <>
        <li><Link to='/'>Home</Link></li>
        {user ? <li> <Link to='/dashboard'>Dashboard</Link></li> : ''}
    </>
    const location = useLocation();
    const pathName = location.pathname;
    const signInPath = '/signin';
    const signInPage = pathName === signInPath;
    if (signInPage) {
        console.log("true");
    }

    return (
        <div className='border-b-2 border-secondary-200 bg-white'>
            <div className='max-w-screen-xl mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navigation}
                            </ul>
                        </div>
                        <Link to='/'> <img src={Logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {navigation}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {user ?
                            <button onClick={logOut} className='btn btn-link'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>Logout</button>
                            :
                            <>{signInPage ?
                                <p className="btn btn-link">Log In / Register</p> :
                                <><label htmlFor="car-parts-login-form" className="btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg> Register / Login</label></>}
                                <input type="checkbox" id="car-parts-login-form" className="modal-toggle" /></>}

                        {user ? '' : <FormModel></FormModel>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;