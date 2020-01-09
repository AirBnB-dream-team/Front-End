import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){
    return (
        <header className="navbar">
            <div className="logo-container">
                <img className="logo" src="https://avatars3.githubusercontent.com/u/59102222?s=200&v=4" alt="BnB logo" />
            </div>
            <nav>
                <NavLink to="/my-listings" activeClassName="active-nav">My Listings</NavLink>
                <NavLink to="/all-listings" activeClassName="active-nav">All Listings</NavLink>
                <NavLink to="/login" activeClassName="active-nav">Login</NavLink>
                <NavLink to="/register" activeClassName="active-nav">Register</NavLink>
                <NavLink to="/logout" activeClassName="active-nav">Logout</NavLink>
            </nav>
        </header>
    )
}

export default NavBar;