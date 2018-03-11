import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/css/header.css';



class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <img src={logo} className="brand-logo" />
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
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
                </nav >
                <ul className="sidenav" id="mobile-demo">
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
        );

    }
}
export default Header;
