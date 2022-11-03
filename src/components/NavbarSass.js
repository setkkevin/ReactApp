import React from 'react';
import '../styles/NavbarSass.css';
// import MainPage from "./components/MainPage";

function NavbarSass(props) {
    return (
        <div className="navbar-sass">
             {/* <MainPage /> */}
 
            <a href="/home"> Home </a> 
            <a  href="/about"> About</a>
            <a  href="/profile"> Profile</a> 
            <a href="/contact"> Contact</a>
           
        </div>
        
    );
}

export default NavbarSass;