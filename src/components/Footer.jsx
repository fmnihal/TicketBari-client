import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="py-5 space-y-5">
            <div className='footer sm:footer-horizontal w-10/12 mx-auto grid grid-cols-3'>
                <nav>
                    <Logo size={80}></Logo>
                    <p className='pr-20'>Book bus, train and launch tickets with ease. Discover the best routes and enjoy a seamless travel experience with TicketBari.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">All Tickets</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Terms of Service</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">support@ticket-bari.com</a>
                </nav>
            </div>
            <hr className='text-gray-600' />
            <p className='text-center'>2024 TicketBari. All rights resrrved.</p>
        </footer>
    );
};

export default Footer;