import React from 'react';
import '../assets/css/ourMacarons.css';
import ourMacarons from '../assets/images/our-macarons-image.png';
import ourMacaronsBackground from '../assets/images/our_macarons_background.png';

export default props => {
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <img src={ourMacarons} className="ourMacaronsImg z-depth-1 " />
                </div>
            </div>
            <div className="row">
                <div className="col s12" >
                    <h4>Our Macarons are freshly made by hand</h4>
                    <p>The vivid hues or our unique macarons reflect the natural flavors and essences that infuse the ganache filling of these delicious almond cookies - each has its own personality, and all of them are made to savour for their delicasy and unique character</p>
                </div>
            </div>
            <div className="row">
                <div className='col s6 l3 offset-s3'>
                    <h4>Classics</h4>
                    <ul className="browser-default">
                        <li>caribbean chocolate</li>
                        <li>coconut</li>
                        <li>colombian coffee</li>
                        <li>green tea</li>
                        <li>lemon</li>
                        <li>madagascar vanilla</li>
                        <li>passion fruit</li>
                        <li>rose</li>
                        <li>raspberry</li>
                        <li>tiffany blue</li>
                        <li>sicilian pistachio</li>
                        <li>sweet wedding almond</li>
                        <li>violet cassis</li>
                        <li>salted caramel</li>
                    </ul>
                </div>
                <div className="col l9 hide-on-med-and-down">
                    <img src={ourMacaronsBackground} className="ourMacaronsImg2 z-depth-1" />
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <p>After purchase we reccomend keeping macarons in the refrigerator. let them come to room temperature before serving - about 10 minutes. For best degustation, our macarons should be consumed within 3 days.</p>
                </div>
            </div>
        </div >
    );
}