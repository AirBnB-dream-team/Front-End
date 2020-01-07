import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display:flex;
    justify-content:space-around;
    text-decoration: none;
`;

function NavBar(){
    return (
        <header>
            <StyledNav>
                
                
                <NavLink to="/my-listings">My Listings</NavLink>
                <NavLink to="/all-listings">All Listings</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/logout">Logout</NavLink>
            </StyledNav>
        </header>
    )
}

export default NavBar;