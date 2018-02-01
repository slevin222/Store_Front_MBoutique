import React from 'react';
import '../assets/css/home.css';
import welcome from '../assets/images/welcome-image.png';
import macarons from '../assets/images/macarons-image.png';
import chocolate from '../assets/images/chocolate.png';
import coconut from '../assets/images/coconut.png';
import violetcassis from '../assets/images/violet-cassis.png';
import vanilla from '../assets/images/vanilla.png';
import greentea from '../assets/images/green-tea.png';
import passionfruit from '../assets/images/passion-fruit.png';
import coffee from '../assets/images/coffee.png';
import pistachio from '../assets/images/pistachio.png';
import raspbery from '../assets/images/raspbery.png';
import lemon from '../assets/images/lemon.png';
import rose from '../assets/images/rose.png';
import tiffanyblue from '../assets/images/tiffany-blue.png';
import caramel from '../assets/images/caramel.png';
import almond from '../assets/images/almond.png';
import Header from './header';
import Footer from './footer';

export default props => {
    return (
        <div>
            <Header />
            <div className="welcomeImage col lg12">
                <img src={welcome} className="welcomeImg col s12" />
            </div>
            <div className="row">
                <div className="macarons col s3">
                    <img src={macarons} />
                </div>
                <div className="textcol col s9">
                    <h4>Welcome to MBoutique!</h4>
                    <p className="middleText">We're a home-based baking business that specializes in the making of French macarons, a gluten free
                    pastry item made from ground almonds. Our business began at the West Reading Farmers Market in 2011.
                    Last year (2013) marked our third and final season of participation at the market.MBoutique was establishedto pay homage to the delicate French confectionery, the macaron. Our shop has been recognized as theconnoisseurs of this delicious French pastry because of the wonderful variety of flavors from our great master chefs.</p>
                    <h4>We love Macarons!</h4>
                    <p className="middleText">Renowned macarons, French delights of the moment can be met in a variety of flavors and colors and
                    are brilliant precisely because of their simplicity - a crispy coating, but delicate in a loose blanketjam,chocolate butter cream is spread inviting. Macarons combines perfectly with champagne or white wine, tea orhot chocolate, fresh juices and natural fruit flavored coffee and guarantee that these little delights soonbecome friend that you cannot break.Find that flavor you like.</p>
                    <h4>Try a sample every day!</h4>
                </div>
            </div>
            <div className="col s12 days">
                <div className="monday">
                    <div className="mtop">
                        <p>Monday</p>
                        <p>15:00 - 16:00</p>
                    </div>
                    <div className="mmiddle">
                        <img src={chocolate} className="chocolate" />
                        <p>chocolate</p>
                    </div>
                    <div className="mbottom">
                        <img src={coconut} className="coconut" />
                        <p>coconut</p>

                    </div>
                </div>
                <div className="tuesday">
                    <div className="ttop">
                        <p>Tuesday</p>
                        <p>15:00 - 16:00</p>
                    </div>
                    <div className="tmiddle">
                        <img src={violetcassis} className="violetcassis" />
                        <p>voilet cassis</p>
                    </div>
                    <div className="tbottom">
                        <img src={greentea} className="greentea" />
                        <p>green tea</p>
                    </div>
                </div>
                <div className="wednesday">
                    <div className="wtop">
                        <p>Wednesday</p>
                        <p>9:00 - 10:00</p>
                    </div>
                    <div className="wmiddle">
                        <img src={passionfruit} className="passionfruit" />
                        <p>passion fruit</p>
                    </div>
                    <div className="wbottom">
                        <img src={vanilla} className="vanilla" />
                        <p>vanilla</p>
                    </div>
                </div>
                <dic className="thursday">
                </dic>
                <div className="friday">
                </div>
                <div className="saturday">
                </div>
                <div className="sunday">
                </div>
            </div>
            <Footer />
        </div >
    )

}