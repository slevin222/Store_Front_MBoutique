import React from 'react';
import '../assets/css/allPages.css';
import giftsPartiesImage from '../assets/images/gifts-parties-image.png';
import giftsPartiesBackground from '../assets/images/gifts_parties_background.png';

export default props => {
    return (
        <div>
            <div className="row">
                <div className="col s12" id="giftsPartiesImg">
                    <img src={giftsPartiesImage} className="giftsPartiesImg z-depth-1" />
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <h4>Let's eat Macarons!</h4>
                    <p className="oueMacaronsPText">We make it easy to share la passion du macaron with your friends, family and colleagues. Choose from our array of premium gift options, or we can create a custom solution. Contact us when you need help planning your celebraion! orders@mboutique.com</p>
                </div>
            </div>
            <div className="row">
                <div className="col l7 m12 s12">
                    <h4>Gift Boxes</h4>
                    <p>Our signature gift boxes make macarons the perfect gift for any occasion</p>
                    <ul className="browser-default">
                        <li>Gift box of 6 macarons in raspberrywhite - $10</li>
                        <li>Gift box of 12 macarons in white, pistachio, or violet - $20</li>
                        <li>Gift box of 24 macarons in violet - $40</li>
                        <li>Gift box of 36 macarons in silver - $60</li>
                        <li>Gift box of 6 macarons in violet or silver - $120</li>
                    </ul>
                    <h4 className="partyT">Party Tower</h4>
                    <p className="oueMacaronsPText">Our 5-tiered party tower becomes the centerpiece of any special event or private celebration, elegantly presenting your unique selection of sixty macarons</p>
                    <ul className="browser-default partyUl">
                        <li>Tower of sixty macarons - $120</li>
                    </ul>
                </div>
                <div className="col l5 m8 s12">
                    <img src={giftsPartiesBackground} className="giftsPartiesImg z-depth-1" />
                </div>
            </div>
        </div>
    );
}