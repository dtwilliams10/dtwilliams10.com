import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <div >
                <nav >
                    <ul className="navbar">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </ul>
                </nav>
            </div>
            );
    }
}

export default NavBar;
