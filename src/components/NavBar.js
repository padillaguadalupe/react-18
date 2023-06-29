import React from "react";
import { Link } from "react-router-dom";
 const NavBar = () => {
     return(
     <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2">
        <div className="container-fluid">
           
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/'>
                    <button className="btn btn-link">Home</button>
                  </Link>
                </li>
                <li className="nav-item">
                    <Link to='/about'>
                        <button className="btn btn-link">About</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/cards'>
                        <button className="btn btn-link">Cards</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/Users'>
                        <button className="btn btn-link">Users</button>
                    </Link>
                </li>
              
            </ul>
           
            </div>
        </div>
        </nav>
     )
 }
 export default NavBar;