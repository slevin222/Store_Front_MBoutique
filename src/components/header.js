import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/css/header.css';



export default props => {
    return (
        <nav>
            <div className="nav-wrapper col s12">
                <img src={logo} className="brand-logo" />
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink exact to='/' activeClassName="acive selected" className="li">WELCOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/our_macarons' activeClassName="acive selected" className="li">OUR MACARONS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/gifts_parties' activeClassName="acive selected" className="li">GIFTS & PARTIES</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' activeClassName="acive selected" className="li s3">CONTACT</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );

}


