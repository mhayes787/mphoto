import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import './header.scss';

//Design for this component only
// import './header.scss';




class Header extends Component {
    render() {
        return (
            <div className="mainHeader">
                <h1 id="WelcomePage"> Welcome To Maurice Hayes Photography</h1>
                <ul className="menu-ul">
                    <li><Link to="/" className="Header-link" style={{ textDecoration: 'none' }}>HOME</Link></li>
                    <li><Link to="/About" className="Header-link" style={{ textDecoration: 'none' }}>ABOUT</Link></li>

                </ul>

            </div>
        );
    }
}

export default Header