import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="Five-header">
                <ul className="menu-ul">
                    <li><Link to="/" className="Header-link" style={{ textDecoration: 'none' }}>HOME</Link></li>
                    <li><Link to="/About" className="Header-link" style={{ textDecoration: 'none' }}>ABOUT</Link></li>

                </ul>

            </div>
        );
    }
}

export default Header