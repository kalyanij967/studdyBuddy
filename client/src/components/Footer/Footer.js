import React from 'react'
import { NavLink } from 'react-router-dom';
import logof from '../../images/logo.png'
import { FaInstagram ,FaLinkedin,FaTelegram } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer row">
          <div className="col-2 align-items-center">
            <NavLink to="/" className='logof'>
                <img src={logof} alt="logof" className='logof'/>
            </NavLink>
          </div>
          <div className="col-2 sapience">
            <h5 className='fw-bold'>Sapience</h5>
            <ul>
              <li><NavLink to='#' className='navlink'>Home</NavLink></li>
              <li><NavLink to='#' className='navlink'>How to use</NavLink></li>
              <li><NavLink to='#' className='navlink'>Community</NavLink></li>
              <li><NavLink to='#' className='navlink'>Study Together</NavLink></li>
            </ul>
          </div>
          <div className="col-2 about">
            <h5 className='fw-bold'>About</h5>
            <ul>
              <li><NavLink to='#' className='navlink'>FAQ & Rules</NavLink></li>
              <li><NavLink to='#' className='navlink'>About Us</NavLink></li>
              <li><NavLink to='#' className='navlink'>Contact Us</NavLink></li>
            </ul>
          </div>
          <div className="col-2 legal">
            <h5 className='fw-bold'>Legal</h5>
            <ul>
              <li><NavLink to='#' className='navlink'>Privacy Policy</NavLink></li>
              <li><NavLink to='#' className='navlink'>Terms and Conditions</NavLink></li>
            </ul>
            </div>
          <div className="col-3 follow">
            <h5 className='fw-bold'>Follow Us</h5>
          <NavLink to='#' className='navlink'><FaInstagram className='icon'/></NavLink>
          <NavLink to='#' className='navlink'><FaLinkedin className='icon'/></NavLink>
          <NavLink to='#' className='navlink'><FaTelegram className='icon'/></NavLink>
          </div>
        </div>
    </>
  );
}

export default Footer;
