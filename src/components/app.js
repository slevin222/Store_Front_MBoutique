import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './home';
import Footer from './footer';
import logo from '../assets/images/logo.png';


const App = () => (
    <div className="container">
        <Router>
            <Home />
        </Router>
    </div>
);

export default App;
