import React from 'react';
import { Link } from 'react-router-dom';
import FormModel from '../../FormModel/FormModel';

const Header = () => {
    const navigation = <>
        <li><Link to='/'>Home</Link></li>
    </>
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
                        <Link to='/'>CarParts</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {navigation}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <label htmlFor="car-parts-login-form" className="btn modal-button"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> open modal</label>
                        <input type="checkbox" id="car-parts-login-form" className="modal-toggle" />
                        <FormModel></FormModel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;