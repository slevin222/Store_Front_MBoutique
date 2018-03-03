import React from 'react';
import '../assets/css/footer.css';
import mail from '../assets/images/mail.png';
import phone from '../assets/images/phone.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';


export default props => {
    return (
        <footer className="page-footer z-depth-2">
            <div className="row footerRow">
                <div className="col l3 s12 footerLeft">
                    <img src={mail} className="mailImg" />
                    <p>order@mboutique.com</p>
                </div>
                <div className="col l6 s12 footerMiddle">
                    <img src={phone} className="phoneImg" />
                    <p className="phone">949.900.3111</p>
                    <p className="copyR">COPYRIGHT @ 2017 MBOUTIQUE. ALL RIGHTS RESERVED</p>
                </div>
                <div className="col l3 s12 footerRight">
                    <img src={twitter} className="twitterImg" />
                    <img src={facebook} className="facebookImg" />
                    <p>Follow us</p>
                </div>
            </div>
        </footer>
    )
}