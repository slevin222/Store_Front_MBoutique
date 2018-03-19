import React from 'react';
import '../assets/css/allPages.css';
import welcome from '../assets/images/french-macarons.jpg';
import macarons from '../assets/images/macarons-image.png';
import DaysOfWeek from './daysOfWeek';



const WelcomePage = () => {
    return (
        <div>
            <div className="row">
                <div className="col s12" id="welcomeImage">
                    <img src={welcome} className="welcomeImg z-depth-1" />
                </div>
            </div>
            <div className="row">
                <div className="hide-on-med-and-down macarons col l4 m4">
                    <img src={macarons} className="hide-on-med-and-down" />
                </div>
                <div className="col l8 s12 middleText">
                    <h4>Welcome to MBoutique!</h4>
                    <p className="middleText">We're a home-based baking business that specializes in the making of French macarons, a gluten free
                        pastry item made from ground almonds. Our business began at the West Reading Farmers Market in 2011.
                        The year (2013) marked our third and final season of participation at the market.MBoutique was establishedto pay homage to the delicate French confectionery, the macaron. Our shop has been recognized as theconnoisseurs of this delicious French pastry because of the wonderful variety of flavors from our great master chefs.</p>
                    <h4>We love Macarons!</h4>
                    <p className="middleText">Renowned macarons, French delights of the moment can be met in a variety of flavors and colors and
                         are brilliant precisely because of their simplicity - a crispy coating, but delicate in a loose blanketjam,chocolate butter cream is spread inviting. Macarons combines perfectly with champagne or white wine, tea orhot chocolate, fresh juices and natural fruit flavored coffee and guarantee that these little delights soonbecome friend that you cannot break.Find that flavor you like.</p>
                    <h4>Try a sample every day!</h4>
                </div>
            </div>
            <div className="row">
                <DaysOfWeek />
            </div>
        </div >
    )
}
export default WelcomePage;