import React from 'react'
import { NavLink} from 'react-router-dom';
import Nav from '../Nav/Nav'
import './Navbar.css'
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/">
            <img src={logo} alt="logo" className='logo'/>
        </NavLink>
        <Nav/>
    </header>
  );
}

export default Navbar;
