import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='menuItems'>
                <li className='menuItem'>Terms of Use</li>
                <li className='menuItem'>Privacy Policy</li>
                <li className='menuItem'>About Us</li>
                <li className='menuItem'>Blog</li>
                <li className='menuItem'>FAQ</li>
            </ul>
            <div className='infoText'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className='socialIcons'>
                <span className='icon'><FaFacebook/></span>
                <span className='icon'><FaInstagram/></span>
                <span className='icon'><FaTwitter/></span>
                <span className='icon'><FaWhatsapp/></span>
            </div>
        </footer>
    )
}

export default Footer
