import React from 'react';
import logo from '../../../assets/images/carpartslogo.png'

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer class="footer max-w-screen-xl mx-auto p-10 text-base-content">
                <div>
                    <img src={logo} alt="" />
                    <p className='text-xl'>carParts Industries Ltd.<br />Providing reliable parts since 1992</p>
                </div>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>

    );
};

export default Footer;