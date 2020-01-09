import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display:flex;
    justify-content:space-around;
    text-decoration: none;
`;

const clearLocalStorage = () => {
    localStorage.clear()
}

function NavBar(){
    return (
        <header>
            <StyledNav>
                <NavLink to={`/my-listings/${localStorage.getItem("id")}`}>My Listings</NavLink>
                <NavLink to={`/all-listings/${localStorage.getItem("id")}`}>All Listings</NavLink>
                {localStorage.getItem('id') ? (<NavLink onClick={()=>{clearLocalStorage()}} to="/login">Logout</NavLink>) : null}
                {!localStorage.getItem('id') ? (<NavLink to="/login">Login</NavLink>) : null}
                {!localStorage.getItem('id') ? (<NavLink to="/register">Register</NavLink>) : null}
                {/* (<NavLink to="/login">Login</NavLink>) */}
                
                
            </StyledNav>
        </header>
    )
}

export default NavBar;