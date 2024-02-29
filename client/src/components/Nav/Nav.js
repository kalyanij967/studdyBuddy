import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { useAuth0 } from '@auth0/auth0-react';

const Nav = () => {
    const { user, isAuthenticated, isLoading,loginWithRedirect,logout } = useAuth0();
  return (
    <nav>
        <div className="menuIcons">
            <br />
            
            <ul className="navbar-list">
                <li>
                    <NavLink to='/' className="navbar-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/venuesearch' className="navbar-link">Search Venue</NavLink>
                </li>
                
                <li>
                    <NavLink to='/about' className="navbar-link">About</NavLink>
                </li>
                <li>
                    <NavLink to='/services' className="navbar-link">Chatroom</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className="navbar-link">Contact</NavLink>
                </li>
                <li>
                    {
                    isAuthenticated ? (
                    <li>
                    <button className='logout btn btn-info ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                    </button>
                    </li>
                    )
                    :(
                    <li>
                        <button className='login btn btn-info' onClick={() => loginWithRedirect()}>Log In</button> 
                    </li>
                    )
                    }
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
