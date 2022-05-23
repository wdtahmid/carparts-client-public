import React from 'react';
import logo from '../../../assets/images/carpartslogo.png'

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer max-w-screen-xl mx-auto p-10 text-base-content">
                <div>
                    <img src={logo} alt="" />
                    <p className='text-xl'>carParts Industries Ltd.<br />Providing reliable parts since 1992</p>
                </div>
                <div>
                    <span className="footer-title text-info">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-info">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-info">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>

    );
};

export default Footer;