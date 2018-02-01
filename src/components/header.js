import React from 'react';
import logo from '../assets/images/logo.png';

export default props => {
    return (
        <nav>
            <div className="nav-wrapper">
                <img src={logo} className="brand-logo" />
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="welcome.html">WELCOME</a></li>
                    <li><a href="ourMacaroons.html">OUR MACAROONS</a></li>
                    <li><a href="giftsAndParties.html">GIFTS & PARTIES</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    )

}


