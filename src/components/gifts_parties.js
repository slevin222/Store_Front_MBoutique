import React from 'react';
import '../assets/css/giftsParties.css';
import giftsPartiesImage from '../assets/images/gifts-parties-image.png';

export default props => {
    return (
        <div>
            <div>
                <div className="col lg12">
                    <img src={giftsPartiesImage} className="giftsPartiesImg col s12" />
                </div>
            </div>
            <div className="giftsText">
                <h4>Let's eat Macarons!</h4>
                <p className="pGiftsText">We make it easy to share la passion du macaron with your friends, family and colleagues. Choose from our array of premium gift options, or we can create a custom solution. Contact us when you need help planning your celebraion! orders@mboutique.com</p>
            </div>
            <div className="giftsText">
                <h4>Gift Boxes</h4>
                <p className="pGiftsText">Our signature gift boxes make macarons the perfect gift for any occasion</p>
                <ul>
                    <li>gift box of 6 macarons in raspberrywhite - $10</li>
                    <li>gift box of 12 macarons in white, pistachio, or violet - $20</li>
                    <li>gift box of 24 macarons in violet - $40</li>
                    <li>gift box of 36 macarons in silver - $60</li>
                    <li>gift box of 6 macarons in violet or silver - $120</li>
                </ul>
            </div>
            <div className="giftsTextBottom">
                <h4>Party Tower</h4>
                <p className="pGiftsText">Our 5-tiered party tower becomes the centerpiece of any special event or private celebration, elegantly presenting your unique selection of sixty macarons</p>
                <ul>
                    <li>tower of sixty macarons = $120</li>
                </ul>
            </div>

        </div>

    );
}