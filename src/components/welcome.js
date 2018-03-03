import React from 'react';
import '../assets/css/welcome.css';
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





export default props => {
    return (

        <div>
            <div className="row">
                <div className="welcomeImage col s12">
                    <img src={welcome} className="welcomeImg z-depth-2" />
                </div>
            </div>
            <div className="row">
                <div className="macarons col l3">
                    <img src={macarons} className="hide-on-med-and-down" />
                </div>
                <div className="col l9 m12 s12">
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
            <div className="row">
                <div className="col s12 days">
                    <div className="everyday">
                        <div className="daystop">
                            <p>Monday</p>
                            <p>15:00 - 16:00</p>
                        </div>
                        <div className="daysmiddle">
                            <img src={chocolate} className="smallMacaronImg" />
                            <p>chocolate</p>
                        </div>
                        <div className="daysbottom" id="monday">
                            <img src={coconut} className="smallMacaronImg" />
                            <p>coconut</p>
                        </div>
                    </div>
                    <div className="everyday">
                        <div className="daystop">
                            <p>Tuesday</p>
                            <p>15:00 - 16:00</p>
                        </div>
                        <div className="daysmiddle">
                            <img src={violetcassis} className="smallMacaronImg" />
                            <p>voilet cassis</p>
                        </div>
                        <div className="daysbottom">
                            <img src={greentea} className="smallMacaronImg" />
                            <p>green tea</p>
                        </div>
                    </div>
                    <div className="everyday">
                        <div className="daystop">
                            <p>Wednesday</p>
                            <p>9:00 - 10:00</p>
                        </div>
                        <div className="daysmiddle">
                            <img src={passionfruit} className="smallMacaronImg" />
                            <p>passion fruit</p>
                        </div>
                        <div className="daysbottom" id="wednesday" >
                            <img src={vanilla} className="smallMacaronImg" />
                            <p>vanilla</p>
                        </div>
                    </div>
                    <dic className="everyday">
                        <div className="daystop">
                            <p>Thursday</p>
                            <p>18:00 - 19:00</p>
                        </div>
                        <div className="daysmiddle">
                            <img src={coffee} className="smallMacaronImg" />
                            <p>coffee</p>
                        </div>
                        <div className="daysbottom">
                            <img src={pistachio} className="smallMacaronImg" />
                            <p>pistachio</p>
                        </div>
                    </dic>
                    <div className="everyday">
                        <div className="daystop">
                            <p>Friday</p>
                            <p>11:00 - 12:00</p>
                        </div>
                        <div className="daysmiddle">
                            <img src={raspbery} className="smallMacaronImg" />
                            <p>raspbery</p>
                        </div>
                        <div className="daysbottom" id="friday">
                            <img src={lemon} className="smallMacaronImg" />
                            <p>lemon</p>
                        </div>
                    </div>
                    <div className="everyday">
                        <div className="daystop">
                            <p>Saturday</p>
                            <p>13:00 - 14:00</p>
                        </div>
                        <div className="daysmiddle">
                            <img src={rose} className="smallMacaronImg" />
                            <p>rose</p>
                        </div>
                        <div className="daysbottom">
                            <img src={tiffanyblue} className="smallMacaronImg" />
                            <p>tiffany blue</p>
                        </div>
                    </div>
                    <div className="everyday">
                        <div className="daystop">
                            <p>Sunday</p>
                            <p>10:00 - 11:00</p>
                        </div>
                        <div className="daysmiddle">
                            <img src={caramel} className="smallMacaronImg" />
                            <p>caramel</p>
                        </div>
                        <div className="daysbottom" id="sunday" >
                            <img src={almond} className="smallMacaronImg" />
                            <p>almond</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
