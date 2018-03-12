import React from 'react';
import { Route } from 'react-router-dom';
import '../assets/css/allPages.css';
import Header from './header';
import Footer from './footer';
import Macarons from './our_macarons';
import GiftsParties from './gifts_parties';
import Contact from './contact';
import Welcome from './welcome';

export default props => {
    return (
        <div className="homeContainer">
            <Header />
            <Route exact path="/" component={Welcome} />
            <Route path="/our_macarons" component={Macarons} />
            <Route path="/gifts_parties" component={GiftsParties} />
            <Route path="/contact" component={Contact} />
            <Footer />
        </div >
    )
}