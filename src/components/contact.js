import React from 'react';
import '../assets/css/contactUs.css';
import contactImage from '../assets/images/contact-image.png';


export default props => {
    return (
        <div>
            <div>
                <div className="col lg12">
                    <img src={contactImage} className="contactImg col s12" />
                </div>
            </div>
            <div className="col lg6">
                <div className="contactText">
                    <h4>Visit us!!</h4>
                    <p className="pContactText">Monday-Friday | 10am - 9pm</p>
                    <p className="pContactText">Saturday | 10am - 8pm</p>
                    <p className="pContactText">Sunday | 11am - 7pm</p>
                    <p className="pContactText">Closed Thanksginving Day, Christman Day and Easter Day</p>
                    <p className="pContactText">1625 Post St.</p>
                    <p className="pContactText">San Francisco. CA 94115</p>
                    <p className="pContactText">949-800-3111</p>
                    <p className="pContactText">order@mboutique.com</p>
                    <p className="pContactText">Send us your questions, comments and flavor suggestions or place an order!</p>
                </div>
            </div>
        </div>
    )
}