import React from 'react';
import '../assets/css/ourMacarons.css';
import ourMacarons from '../assets/images/our-macarons-image.png';
import ourMacaronsBackground from '../assets/images/our_macarons_background.png';

export default props => {
    return (
        <div>
            <div className="col lg12">
                <img src={ourMacarons} className="ourMacaronsImg col s12" />
            </div>
            <div className="macaronText" >
                <h4>Our Macarons are freshly made by hand</h4>
                <p className="pText">The vivid hues or our unique macarons reflect the natural flavors and essences that infuse the ganache filling of these delicious almond cookies - each has its own personality, and all of them are made to savour for their delicasy and unique character</p>
            </div>
            <div className="backgroundImgDiv" style={{ backgroundImage: "url(" + ourMacaronsBackground + ")" }}>
                <div className='classics'>
                    <h4>Classics</h4>
                    <ul>
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
            </div>
            <div className="bottomP">
                <p className="pText">After purchase we reccomend keeping macarons in the refrigerator. let them come to room temperature before serving - about 10 minutes. For best degustation, our macarons should be consumed within 3 days.</p>
            </div>
        </div >
    );
}