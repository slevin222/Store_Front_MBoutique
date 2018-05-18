import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/css/allPages.css';
import macarons from '../assets/images/macarons-image.png';



class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navStyle: {
                transform: "translateX(100%)"
            },
            dragStyle: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                right: "0px",
                touchAction: "pan-y"
            }
        };
        this.slideOutMenu = this.slideOutMenu.bind(this);
        this.returnMenu = this.returnMenu.bind(this);

    }

    slideOutMenu() {
        const shadowBox = { ...this.state.dragStyle };
        delete shadowBox.right;
        this.setState({
            navStyle: {
                transform: "translateX(0%)"
            },
            dragStyle: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                left: "0px",
                width: "100%",
                transitionDuration: ".4s"
            }
        });
    }

    returnMenu() {
        const shadowBox = { ...this.state.dragStyle };
        delete shadowBox.left;
        delete shadowBox.width;
        this.setState({
            navStyle: {
                transform: "translateX(100%)"
            },
            dragStyle: {
                backgroundColor: "rgba(0, 0, 0, 0.0)",
                right: "0px"
            }
        });
    }


    render() {

        return (
            <nav>
                <div className="nav-wrapper">
                    <NavLink exact to='/'><img src={logo} className="brand-logo" /></NavLink >
                    <a href="#" className="right button-collapse" onClick={this.slideOutMenu}><i className="large material-icons pink-text text-darken-3">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <NavLink exact to='/' className="li">WELCOME</NavLink >
                        </li>
                        <li>
                            <NavLink to='/our_macarons' className="li">OUR MACARONS</NavLink >
                        </li>
                        <li>
                            <NavLink to='/gifts_parties' className="li">GIFTS & PARTIES</NavLink >
                        </li>
                        <li>
                            <NavLink to='/contact' className="li">CONTACT</NavLink >
                        </li>
                    </ul>
                    <div>
                        <ul className="side-nav right-aligned" id="mobileNav" style={this.state.navStyle} >
                            <img src={logo} className="macaronsNav" />
                            <li>
                                <NavLink exact to='/' onClick={this.returnMenu} >WELCOME</NavLink >
                            </li>
                            <li>
                                <NavLink to='/our_macarons' onClick={this.returnMenu}>OUR MACARONS</NavLink >
                            </li>
                            <li>
                                <NavLink to='/gifts_parties' onClick={this.returnMenu}>GIFTS & PARTIES</NavLink >
                            </li>
                            <li>
                                <NavLink to='/contact' onClick={this.returnMenu} >CONTACT</NavLink >
                            </li>
                            <img src={macarons} className="macaronsNav" />
                        </ul>
                        <div onClick={this.returnMenu} className="drag-target" style={this.state.dragStyle} />
                    </div>
                </div>
            </nav >
        );

    }
}
export default Header;
