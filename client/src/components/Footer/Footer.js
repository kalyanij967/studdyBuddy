import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo2.png'
import { FaInstagram ,FaLinkedin,FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <div className="footer row">
          <div className="col-2">
            <NavLink to="/" className='logo'>
                <img src={logo} alt="logo" className='logo'/>
            </NavLink>
          </div>
          <div className="col-2 sapience">
            <h6>Sapience</h6>
            <ul>
              <li>Home</li>
              <li>How to use</li>
              <li>Community</li>
              <li>Study Together</li>
            </ul>
          </div>
          <div className="col-2 about">
            <h6>About</h6>
            <ul>
              <li>FAQ & Rules</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-2 legal">
            <h6>Legal</h6>
            <ul>
              <li>Privacy Policy</li>
              <li> Terms and Conditions</li>
            </ul>
            </div>
          <div className="col-3 follow">
          <FaInstagram />
          <FaLinkedin />
          <FaTelegram/>
          </div>
        </div>
    </>
  );
}

export default Footer;
