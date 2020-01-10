import React from 'react';
import { NavLink } from 'react-router-dom';

const clearLocalStorage = () => {
    localStorage.clear()
}

function NavBar(){
    return (

        <header className="navbar">
            <div className="logo-container">
                <img className="logo" src="https://avatars3.githubusercontent.com/u/59102222?s=200&v=4" alt="BnB logo" />
            </div>
            <nav>
                <NavLink to={`/my-listings/${localStorage.getItem("id")}`} activeClassName="active-nav">My Listings</NavLink>
                <NavLink to={`/all-listings/${localStorage.getItem("id")}`} activeClassName="active-nav">All Listings</NavLink>
                {localStorage.getItem('id') ? (<NavLink onClick={()=>{clearLocalStorage()}} to="/login" activeClassName="active-nav">Logout</NavLink>) : null}
                {!localStorage.getItem('id') ? (<NavLink to="/login" activeClassName="active-nav">Login</NavLink>) : null}
                {!localStorage.getItem('id') ? (<NavLink to="/register" activeClassName="active-nav">Register</NavLink>) : null}
                
                
                
            </nav>

        </header>
    )
}

export default NavBar;