import React from "react"
import logo from './logo.svg';
import "./App.css";
export default function Navbar(){
    return ( 
        <div className="nav-div">
        <nav>
          <img  style={ { width: 100, height: 50}} src={logo} className="App-logo" alt="logo" />
          <h3 style={{color:"blue"}}>First React project By Seth Kevin </h3> 
         </nav>
         
        </div>
    )

}