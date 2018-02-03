import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Footer from './footer';
import logo from '../assets/images/logo.png';


const App = () => (
    <div className="container">
        <Home />
        <Route exact path="/" component={Home} />
    </div>
);

export default App;
