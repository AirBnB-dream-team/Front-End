import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display:flex;
    justify-content:space-between;
    text-decoration: none;
    width: 50%;
    align-items: center;
   
`;

function NavBar(){
    return (
        <header>
            <div className="logo-container">
                <img src="https://avatars3.githubusercontent.com/u/59102222?s=200&v=4" alt='Logo image' />
            </div>
            <StyledNav>
                
                
                <NavLink to="/my-listings" activeClassName="selected" >My Listings</NavLink>
                <NavLink to="/all-listings" activeClassName="selected">All Listings</NavLink>
                <NavLink to="/login" activeClassName="selected">Login</NavLink>
                <NavLink to="/register" activeClassName="selected">Register</NavLink>
                <NavLink to="/logout" activeClassName="selected">Logout</NavLink>
            </StyledNav>
        </header>
    )
}

export default NavBar;