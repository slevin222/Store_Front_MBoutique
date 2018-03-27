import React, { Component } from 'react';
import '../assets/css/allPages.css';
import Form from './contactForm';
import contactImage from '../assets/images/contact-image.png';


class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12" id="contactImage">
                        <img src={contactImage} className="contactImg z-depth-1" />
                    </div>
                </div>
                <div className="row">
                    <Form />
                    <div className="col s12 l5 offset-l1">
                        <div className="contactText">
                            <div className="center-align">
                                <h4 className="visitUs">Visit us!!</h4>
                            </div>
                            <div className="divider"></div>
                            <p className="pContactText">Monday-Friday | 10am - 9pm</p>
                            <p className="pContactText">Saturday | 10am - 8pm</p>
                            <p className="pContactText">Sunday | 11am - 7pm</p>
                            <p className="pContactText">Closed Thanksgiving, Christmas and Easter</p>
                            <div className="divider"></div>
                            <p className="pContactText">1625 Post St.</p>
                            <p className="pContactText">San Francisco. CA 94115</p>
                            <p className="pContactText">949-690-1076</p>
                            <div className="divider"></div>
                            <p className="pContactText">order@mboutique.com</p>
                            <p className="pContactText">Send us your questions, comments and flavor suggestions or place an order!</p>
                            <div className="divider"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;