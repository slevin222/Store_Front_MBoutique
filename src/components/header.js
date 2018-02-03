import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/css/header.css';

export default props => {
    return (
        <nav>
            <div className="nav-wrapper">
                <img src={logo} className="brand-logo" />
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        {/* <a href="welcome" className="li">WELCOME</a> */}
                        <NavLink exact to='/' activeClassName="acive selected" className="li">WELCOME</NavLink>
                    </li>
                    <li><a href="ourMacaroons" className="li">OUR MACAROONS</a></li>
                    <li><a href="giftsAndParties" className="li">GIFTS & PARTIES</a></li>
                    <li><a href="contact" className="li">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    )

}


